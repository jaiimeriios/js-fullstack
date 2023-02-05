import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const { setUserInfo } = useContext(UserContext);

    const login = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:666/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then((userInfo) => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        } else {
            console.log('wrong credentials');
        }
    };

    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <>
            <form className="auth-form" onSubmit={login}>
                <h3>Login</h3>
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
                <button>Login</button>
            </form>
        </>
    );
};

export default Login;
