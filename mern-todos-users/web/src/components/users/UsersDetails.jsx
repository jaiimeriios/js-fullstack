import { useState } from 'react';
import { useUsersContext } from '../../hooks/useDataContext';

const UsersDetails = ({ user }) => {
    const { dispatch } = useUsersContext();

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
        </tr>
    );
};

export default UsersDetails;
