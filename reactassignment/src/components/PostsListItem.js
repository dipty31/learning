import { FaRegTrashCan } from 'react-icons/fa6';
import { FaRegEdit } from "react-icons/fa";
import { updatePost } from '../store/thunks/updatePost';
import {useThunk} from '../hooks/use-thunk';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removePost } from '../store/thunks/removePost';

function PostsListItem({post}){
    const [doRemovePost, isLoading, error] = useThunk(removePost);
    const dispatch = useDispatch();

    const handleDelete =(e) => {
        e.preventDefault();
        console.log({post});
        dispatch(removePost(post));
    };

    const handleUpdate =() => {
        const updatedData = {
            title: "title",
            body: "body",
        }
        dispatch(updatePost(updatedData));
    };

    return(
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className={`flex flex-row items-center justify-between bg-${post.isDeleted ? 'red-500' : 'white-500'}`}>
                    <button className="mr-3 border"
                            onClick={handleDelete}
                            disabled={post.isDeleted}>
                    {post.isDeleted ? 'POST DELETED' : <FaRegTrashCan />}
                    </button>
                    {error && <div>Error in deleting the user.</div>}
                    {post.isDeleted?'POST IS DELETED': post.body}
                    <Link to={`/updateForm/${post.id}`}><button  classname="border" onClick={handleUpdate} ><FaRegEdit /></button></Link>
                </div>
            </div>
        </div>
    );
}

export default PostsListItem;