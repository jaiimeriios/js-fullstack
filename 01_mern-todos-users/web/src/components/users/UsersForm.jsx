import { useState } from 'react';
import { useUsersContext } from '../../hooks/useDataContext';

const UsersForm = () => {
    const { dispatch } = useUsersContext();
    const [userid, setUserid] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const users = { userid, name, username, email };

        const response = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        });

        const data = await response.json();

        if (!response.ok) {
            console.log('error');
        }
        if (response.ok) {
            setUserid('');
            setName('');
            setUsername('');
            setEmail('');
            dispatch({ type: 'CREATE_USER', payload: data });
            // console.log('new added', data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='users-form'>
            <label>User ID:</label>
            <input
                type="number"
                onChange={(e) => setUserid(e.target.value)}
                value={userid}
            />
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
            <label>Email:</label>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <button>Add</button>
        </form>
    );
};

export default UsersForm;
