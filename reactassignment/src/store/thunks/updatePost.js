import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const updatePost = createAsyncThunk('posts/update', async (updatedData) => {
      console.log(updatedData)
      const {title, body} = updatedData;
      const response = await axios.put(`https://dummyjson.com/posts/${Number(updatedData.id)}`, ({title, body}));

      // console.log({response});
      return response.data;
});

export { updatePost };