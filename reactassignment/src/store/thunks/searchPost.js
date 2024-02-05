import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const searchPost = createAsyncThunk('posts/search', async (term) => {
    console.log({term})
    const response = await axios.get(`https://dummyjson.com/posts/search?q=${term}`);
    console.log({response});
    return response.data;
});

export {searchPost};