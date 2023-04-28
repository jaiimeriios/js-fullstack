import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../components/Editor';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSumary] = useState('');
    const [files, setFiles] = useState('');
    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        const response = await fetch('http://localhost:666/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <>
            <form className="create-post" onSubmit={createNewPost}>
                <h3 className="title">Create New Post</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Summary"
                    value={summary}
                    onChange={(e) => setSumary(e.target.value)}
                />
                <input type="file" onChange={(e) => setFiles(e.target.files)} />
                <Editor value={content} onChange={setContent} />
                <button>Create Post</button>
            </form>
        </>
    );
};

export default CreatePost;