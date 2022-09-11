import { useState } from 'react';
import { useUsersContext } from '../../hooks/useDataContext';

const UsersForm = () => {
    const { dispatch } = useUsersContext();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const users = { name, username, age };

        const response = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        });

        const json = await response.json();

        if (!response.ok) {
            console.log('error');
        }
        if (response.ok) {
            setName('');
            setUsername('');
            setAge('');
            dispatch({ type: 'CREATE_USERS', payload: json });
            console.log('new added', json);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='users-form'>
            <label>Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Username:</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>Age:</label>
            <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />

            <button>Add</button>
        </form>
    );
};

export default UsersForm;
