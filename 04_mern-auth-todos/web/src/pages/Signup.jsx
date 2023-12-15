import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signup, isLoading, error } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(username, email, password);
        signup(username, email, password);
    };

    return (
        <>
            <h2>Signup Page</h2>

            <form onSubmit={handleSubmit} className="auth-form">
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={isLoading}>Sign Up</button>
                {error && (
                    <div>
                        <p className="error">{error}</p>
                    </div>
                )}
            </form>
        </>
    );
}

export default Signup;
