// features/posts/PostForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/thunks/addPost';
import { Link, useNavigate, useNavigation} from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();

    // if (!title.trim() || !body.trim()) {
    //   // Handle validation or show an error message
    //   return;
    // }
    console.log({title, body});
    
    try {
      const result = await dispatch(addPost({ title, body })).then(unwrapResult);
      if(result){
        navigate('/')
      }
    } catch (error) {
      
    }
    setTitle('');
    setBody('');
  };

  return (
    <div className="mt-4 p-4 border rounded bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter the title of your post"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Write your post content here"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
         <p> Submit Post</p>
        </button>
      </form>
    </div>
  );
};

export default PostForm;
