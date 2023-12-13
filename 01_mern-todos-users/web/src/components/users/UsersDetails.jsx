import { useUsersContext } from '../../hooks/useDataContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const UsersDetails = ({ user }) => {
    const { dispatch } = useUsersContext();

    // DELETE
    const handleDelete = async () => {
        const response = await fetch(`users/${user._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response.ok) {
            dispatch({ type: 'DELETE_USER', payload: user });
            toast.success(`User ${user.name} deleted`);
        }
    };

    return (
        <tr>
            <td>{user.userid}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                {formatDistanceToNow(new Date(user.updatedAt), {
                    addSuffix: true,
                })}
            </td>
            <td>
                <Link to={`/users/${user._id}`}>View</Link>
            </td>
            <td>
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default UsersDetails;
