import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Post = ({ _id, title, content, cover, summary, createdAt, author }) => {
    return (
        <div className="entry">
            <div className="bg-img">
                <Link to={`/post/${_id}`}>
                    <img src={`http://localhost:666/${cover}`} alt={title} />
                </Link>
            </div>
            <h2>
                <Link to={`/post/${_id}`}>{title}</Link>
            </h2>
            <p className="info">
                <span className="author">{author.username}</span>
                <time>
                    {formatDistanceToNow(new Date(createdAt), {
                        addSuffix: true,
                    })}
                </time>
            </p>
            <p>{summary}</p>
        </div>
    );
};

export default Post;
