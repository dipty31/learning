// features/posts/UpdateForm.js
import React, { useState } from 'react';
import { updatePost } from '../store/thunks/updatePost';
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';// it's not highlighted like not used
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

function UpdateForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const params = useParams();
  

  const handleTitleUpdate = (e) => setTitle(e.target.value);
  const handleBodyUpdate = (e) => setBody(e.target.value);

  const navigate = useNavigate()


  const handleUpdate = async (e) => {
    e.preventDefault();

    let updatedData = {
      title: title,
      body: body,
  }

    try {
      const result = await dispatch(updatePost({...updatedData, id : params.id})).then(unwrapResult);
      console.log({result});
      if(result){
        navigate('/')
      }
    } catch (error) {

    }

    // if (!title.trim() || !body.trim()) {
    //   // Handle validation or show an error message
    //   return;
    // }
    

    // dispatch(updatePost({updatedData}));
    // setTitle('');
    // setBody('');
  };

  return (
    <div className="mt-4 p-4 border rounded bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Update Post</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleUpdate}
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
            onChange={handleBodyUpdate}
            className="w-full px-3 py-2 border rounded"
            placeholder="Write your post content here"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <p>Update Post</p>
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
