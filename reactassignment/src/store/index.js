import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/postsSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export * from './thunks/fetchPost';
export * from './thunks/addPost';
export * from './thunks/removePost';
