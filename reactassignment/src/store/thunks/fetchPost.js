import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPost = createAsyncThunk('posts/fetch', async ({page, limit}) => {
    const response = await axios.get(`https://dummyjson.com/posts?_page=${page}&_limit=${limit}`);

    return response.data;
});
// fetchPost thunk
// const fetchPost = createAsyncThunk('posts/fetch', async ({ page, limit }) => {
//     const response = await axios.get(`https://dummyjson.com/posts?_page=${page}&_limit=${limit}`);
//     return response.data;
// });


export { fetchPost };