import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const allUsers = useSelector(selectAllUsers);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState();

    const onSavePostClicked = (e) => {
        e.preventDefault();
        console.log(userId);
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
            setUserId('')
        }
    };
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    return (
        <>
            <h3>Add New Post</h3>
            <form onSubmit={onSavePostClicked}>
                <label htmlFor="postAuthor">Author</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                >
                    <option value="">Select a User</option>
                    {allUsers.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button disabled={!canSave}>Add Posts</button>
            </form>
        </>
    );
};

export default AddPostForm;
