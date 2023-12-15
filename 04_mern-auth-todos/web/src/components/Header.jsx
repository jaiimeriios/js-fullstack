import reactLogo from '/react.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ title }) => {
    // const { logout } = useLogout();
    // const { userAuth } = useAuthContext();

    // // console.log(userAuth);

    // const handleClick = () => {
    //     logout();
    // };

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

                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/login">login</NavLink>

                {/* {userAuth ? (
                        <>
                            <span>{userAuth.email}</span>
                            <button onClick={handleClick}>logout</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/signup">Signup</NavLink>
                            <NavLink to="/login">login</NavLink>
                        </>
                    )} */}
            </nav>
        </header>
    );
};

export default Header;
