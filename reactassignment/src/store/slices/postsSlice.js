import { createSlice } from '@reduxjs/toolkit';
import { fetchPost } from '../thunks/fetchPost';
import { addPost } from '../thunks/addPost';
import { removePost } from '../thunks/removePost';
import { updatePost } from '../thunks/updatePost';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { searchPost } from '../thunks/searchPost';

const postsSlice = createSlice({
    name: 'posts',
    initialState:{
        data:[],
        isLoading: false,
        error: null,

        //Iitial states for Pagination
        currentPage: 1,
        itemsPerPage: 5,
        totalItems: 0,
        //------

    },

    extraReducers(builder){
        builder.addCase(fetchPost.pending, (state,action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchPost.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = [...action.payload.posts];

            //Pagination state update
            state.totalItems = action.payload.length;
            state.error = null;
            //----
        });

        builder.addCase(fetchPost.rejected, (state,action) => {
            state.isLoading = false;
            console.log(0);
            state.error = action.error;
        });


        builder.addCase(addPost.pending, (state,action) => {
            state.isLoading = true;
            console.log(1);
        });

        builder.addCase(addPost.fulfilled, (state,action) => {
            state.isLoading = false;
            console.log({state, action})
            state.data.push(action.payload);
        });

        builder.addCase(addPost.rejected, (state,action) => {
            state.isLoading = false;

            console.log(state,action);

            state.error = action.error;
        });


        builder.addCase(removePost.pending, (state,action) => {
            state.isLoading = true;
        });

        builder.addCase(removePost.fulfilled, (state,action) => {
            state.isLoading = false;
            //console.log({id : action.payload})
            state.data = state.data.map((post) => {
                return post.id === action.payload.id ? action.payload: post;
            });
        });

        builder.addCase(removePost.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error;
            });

        builder.addCase(updatePost.pending, (state,action) => {
                state.isLoading = true;
            });
            
        builder.addCase(updatePost.fulfilled, (state,action) => {
            state.isLoading = false;
            // console.log({payload: action.payload});
            // state.data.posts = action.payload;

            const index = state.data.findIndex((post) => 
                post.id === action.payload.id
            )
            // console.log({index})
            state.data[index] = action.payload;
        });

            builder.addCase(updatePost.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error;
            });
            

            builder.addCase(searchPost.pending, (state,action) => {
                state.isLoading = true;
            });

            builder.addCase(searchPost.fulfilled, (state,action) => {
                state.isLoading = false;
                state.data = [...action.payload.posts];
            });

            builder.addCase(searchPost.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error;
            });
    },
});

export const postsReducer = postsSlice.reducer;
export const  selectPosts  = ((state) => state.posts.data);