import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addPost = createAsyncThunk('posts/add', async (post) => {
    //i am fetching posts from an api and then posting is on my json server db.json here 
    // const response = await axios.get('https://dummyjson.com/posts');
    
    // console.log(response); 

    // console.log({post});

    const response = await axios.post('https://dummyjson.com/posts/add',({...post, userId: 5}));

    return response.data;
    //return response.data;
});

export { addPost };