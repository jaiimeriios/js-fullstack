import { useEffect } from 'react';
import { useUsersContext } from '../hooks/useDataContext';

// import WorkoutsDetails from '../components/WorkoutsDetails';
// import WorkoutForm from '../components/WorkoutForm';

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

            {/* FORM  */}
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
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.age}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Users;
