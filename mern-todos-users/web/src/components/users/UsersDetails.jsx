import { useState } from 'react';
import { useUsersContext } from '../../hooks/useDataContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const UsersDetails = ({ user }) => {
    const { dispatch } = useUsersContext();

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
        </tr>
    );
};

export default UsersDetails;
