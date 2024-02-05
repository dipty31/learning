import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  PostsList  from './components/PostsList';
import PostForm from './components/PostForm';
import UpdateForm from './components/UpdateForm';
import { fetchPost } from './store/thunks/fetchPost';
import { useThunk } from './hooks/use-thunk';
import { useEffect } from 'react';

const router = createBrowserRouter([
    {
        path: "/",
        element : <PostsList/>
    },
    {
        path: "/PostForm",
        element: <PostForm/>
    },
    {
        path: "/updateForm/:id",
        element: <UpdateForm/>
    }

])

function App(){

    const [doFetchPost] = useThunk(fetchPost);
useEffect(()=> {
    doFetchPost();
}, [doFetchPost]);

    return(
        
        <div className='App' >
<RouterProvider router={router} />
        </div>
    ); 
}

export default App;
