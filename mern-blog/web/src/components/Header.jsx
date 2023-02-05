import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // fetch('http://localhost:666/profile', {
        //     credentials: 'include',
        // })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((userInfo) => {
        //         setUsername(userInfo.username);
        //     });

        fetch('http://localhost:666/profile', {
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => setUsername(data.username));
    }, []);

    const logout = () => {
        console.log('asdf')
        fetch('http://localhost:666/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUsername(null)
    };

    return (
        <header>
            <div className="title">
                <img src={logo} alt="logo" />
                <h1>
                    <NavLink to="/">MERN BLOG</NavLink>
                </h1>
            </div>

            <nav>
                {username ? (
                    <>
                        <NavLink to="create">Create New Post</NavLink>
                        <a onClick={logout}>Logout</a>
                    </>
                ) : (
                    <>
                        <NavLink to="login">Login</NavLink>
                        <NavLink to="register">Register</NavLink>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
