import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const PostPage = () => {
    const { id } = useParams();
    const { userInfo } = useContext(UserContext);
    const [postInfo, setPostInfo] = useState();

    useEffect(() => {
        fetch(`http://localhost:666/post/${id}`)
            .then((response) => response.json())
            .then((data) => setPostInfo(data));
    }, []);

    if (!postInfo) return '';
    return (
        <div className="blog-post">
            <img
                src={`http://localhost:666/${postInfo.cover}`}
                alt={postInfo.title}
            />
            {userInfo.id === postInfo.author._id && (
                <Link to={`/edit/${postInfo._id}`} className="edit-post">
                    Edit Post
                </Link>
            )}
            <p className="info">
                <span className="author">{postInfo.author.username}</span>
                <time>
                    {formatDistanceToNow(new Date(postInfo.createdAt), {
                        addSuffix: true,
                    })}
                </time>
            </p>
            <h2 className="title">{postInfo.title}</h2>
            <p className="summary">{postInfo.summary}</p>
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: postInfo.content }}
            />
        </div>
    );
};

export default PostPage;
