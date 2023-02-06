import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Post = ({ title, content, cover, summary, createdAt, author }) => {
    return (
        <div className="entry">
            <div className="bg-img">
                <img src={`http://localhost:666/${cover}`} alt={title} />
            </div>
            <h2>{title}</h2>
            <p className="info">
                <Link className="author" to="/">
                    {author.username}
                </Link>
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
