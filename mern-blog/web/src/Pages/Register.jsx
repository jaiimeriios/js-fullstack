import { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:666/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        if (response.status === 200) {
            console.log('200');
        } else {
            console.log('400');
        }
    };

    return (
        <>
            <form className="auth-form" onSubmit={register}>
                <h3>Register</h3>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Register</button>
            </form>
        </>
    );
};

export default Register;
