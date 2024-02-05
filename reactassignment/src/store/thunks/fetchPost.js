import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPost = createAsyncThunk('posts/fetch', async () => {
    const response = await axios.get('https://dummyjson.com/posts');

    return response.data;
});

export { fetchPost };