import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CgSearchLoading } from "react-icons/cg";
import { addPost } from '../store/thunks/addPost';
import { useThunk } from '../hooks/use-thunk';
import PostsListItem from './PostsListItem';
import { Link } from 'react-router-dom'
import { selectPosts } from '../store/slices/postsSlice';
import { fetchPost } from '../store/thunks/fetchPost';
import { searchPost } from '../store/thunks/searchPost';

function PostsList(){
    const dispatch = useDispatch();
    const [doFetchPost, isLoadingPost, loadingPostError] = useThunk(fetchPost);
    const [doCreatePost, isCreatingPost, creatingPostError] = useThunk(addPost);
    const [doSearchPost, isSearchingPost, searchingPostError] = useThunk(searchPost);
    const data = useSelector(selectPosts);

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const [itemsPerPage] = useState(5);

//-----
    useEffect(() => {
      dispatch(fetchPost({ start: 0, end: 4, currentPage: 0}));
    }, []);

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
  };
//------
const handlePostAdd = () => {
    doCreatePost();
};

const handleSearch = (e) => {
  e.preventDefault();
  if (searchTerm.trim() !== '') {
    dispatch(searchPost(searchTerm));
  }
};

let filteredPosts = data || [];
  // if (searchTerm) {
  //   filteredPosts = filteredPosts.filter((post) =>
  //     post.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }

let content;
if(isLoadingPost){
    content = 'loading...'//<Skeleton times={10} className="h-10 w-full"/>;
}
else if(loadingPostError){
    content = <div>Error fetching data...</div>
} 
else{
  const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPosts = filteredPosts.slice(startIndex, endIndex);

        content = currentPosts.map((post) => {
            return <PostsListItem key={post.id} post={post} />;
        });
  }   

    return(
        <div>
        <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl"><b>Posts</b></h1>
        <div className="flex justify-center items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="px-2 py-1 border rounded mr-2"
          />
          <button onClick={handleSearch} className="m-2 text-xl" ><CgSearchLoading /></button>

          <button className="m-2 text-xl" ><Link to ="/PostForm">+ Add Post</Link></button>
          </div>
        {creatingPostError && 'Error creating post.'}

        </div>

        {content}
        <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredPosts.length / itemsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 px-3 py-1 rounded ${
                            currentPage === index + 1 ? 'bg-gray-300' : 'bg-white'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
      </div> 
        </div>
    );
}


export default PostsList;