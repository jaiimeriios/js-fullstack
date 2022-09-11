import { useState } from 'react';
import { useUsersContext } from '../../hooks/useDataContext';

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
        }
    };

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>
                {formatDistanceToNow(new Date(user.createdAt), {
                    addSuffix: true,
                })}
            </td>
            <td>
                <span className="delete" onClick={handleDelete}>
                    Delete
                </span>
            </td>
        </tr>
    );
};

export default UsersDetails;
