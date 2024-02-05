import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removePost = createAsyncThunk('posts/remove', async (post) => {
    console.log(post);
    const response = await axios.delete(`https://dummyjson.com/posts/${post.id}`);

    return post;
});

export { removePost };