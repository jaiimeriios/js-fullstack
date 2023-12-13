import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const { login, isLoading, error } = useLogin()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password)
        console.log('Login:: ', email, password);
    };

    return (
        <form className="auth-forma" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Email</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Login</button>
            {error && (
                <div>
                    <p className='error'>{error}</p>
                </div>
            )}
        </form>
    );
};

export default Login;