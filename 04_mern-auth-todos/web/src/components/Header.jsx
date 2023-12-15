import reactLogo from '/react.svg';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Header = ({ title }) => {
    const { logout } = useLogout();
    const { userAuth } = useAuthContext();

    return (
        <header>
            <div>
                <NavLink to="/" className="home">
                    <img src={reactLogo} className="logo" alt="logo" />
                    <h1>{title}</h1>
                </NavLink>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>

                {userAuth ? (
                    <>
                        <span>{userAuth.email}</span>
                        <button onClick={() => {logout()}}>
                            logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink to="/signup">Signup</NavLink>
                        <NavLink to="/login">login</NavLink>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
