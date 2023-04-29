import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find((user) => user.id === userId);

    return (
        <>
            <p>by {author ? author.name : 'Unknown Author'}</p>
        </>
    );
};

export default PostAuthor;
