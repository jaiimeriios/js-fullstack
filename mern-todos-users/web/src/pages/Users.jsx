import { useEffect } from 'react';
import { useUsersContext } from '../hooks/useDataContext'

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
            <div className="users-wrapper">
                {/* FORM  */}
                <div className="users">
                    {
                    users &&
                        users.map((todo) => (
                            <p key={todo._id}>{todo.name}</p>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Users;