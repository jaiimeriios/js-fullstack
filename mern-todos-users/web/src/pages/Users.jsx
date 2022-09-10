import { useEffect } from 'react';
import { useUsersContext } from '../hooks/useDataContext';

import UsersForm from '../components/users/UsersForm';
import UsersDetails from '../components/users/UsersDetails';

const Users = () => {
    const { users, dispatch } = useUsersContext();

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:666/users');
            const data = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_USERS', payload: data });
            }
        };
        fetchUsers();
    }, [dispatch]);

    return (
        <>
            <h2>Users</h2>

            <UsersForm />

            <div className="users-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((user) => (
                                <UsersDetails key={user._id} user={user} />
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Users;
