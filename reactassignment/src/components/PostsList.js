import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addPost } from '../store/thunks/addPost';
import { useThunk } from '../hooks/use-thunk';
import PostsListItem from './PostsListItem';
import { Link } from 'react-router-dom'
import { selectPosts } from '../store/slices/postsSlice';
import { fetchPost } from '../store/thunks/fetchPost';

function PostsList(){
    const dispatch = useDispatch();
    const [doFetchPost, isLoadingPost, loadingPostError] = useThunk(fetchPost);
    const [doCreatePost, isCreatingPost, creatingPostError] = useThunk(addPost);

    const data = useSelector(selectPosts);

    const [searchTerm, setSearchTerm] = useState('');



const handlePostAdd = () => {
    doCreatePost();
};

let filteredPosts = data || [];
  if (searchTerm) {
    filteredPosts = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

let content;
if(isLoadingPost){
    content = 'loading...'//<Skeleton times={10} className="h-10 w-full"/>;
}
else if(loadingPostError){
    content = <div>Error fetching data...</div>
} 
else{
    content = filteredPosts.map((post) => {
        return <PostsListItem key={post.id} post={post} />; 
    });


    return(
        <div>
        <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl"><b>Posts</b></h1>
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="px-2 py-1 border rounded mr-2"
          />
          <button className="m-2 text-xl" ><Link to ="/PostForm">+ Add Post</Link></button>
          </div>
        {creatingPostError && 'Error creating post.'}

        </div>
        {content}
        </div>
    );
}
}

export default PostsList;