import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { UserContext } from '../context/UserContext';

const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:666/profile', {
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => setUserInfo(data));
    }, [setUserInfo]);

    const logout = () => {
        fetch('http://localhost:666/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
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
                {userInfo?.username ? (
                    <>
                        <NavLink to="create">Create New Post</NavLink>
                        <a href='/#' onClick={logout}>
                            Logout
                        </a>
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
