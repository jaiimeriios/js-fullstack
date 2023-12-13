import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Header = ({ title }) => {
    const { logout } = useLogout();
    const { userAuth } = useAuthContext();

    // console.log(userAuth);

    const handleClick = () => {
        logout();
    };

    return (
        <>
            <header>
                <div>
                    <NavLink to="/" className='home'>
                        <img src={logo} className="logo" alt="logo" />
                        <h1>{title}</h1>
                    </NavLink>
                </div>
                <nav>
                    {/* <NavLink to="/">Home</NavLink> */}
                    {userAuth ? (
                        <>
                            <span>{userAuth.email}</span>
                            <button onClick={handleClick}>logout</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/signup">Signup</NavLink>
                            <NavLink to="/login">login</NavLink>
                        </>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Header;
