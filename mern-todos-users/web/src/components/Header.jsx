import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg';

const Header = ({ title }) => {
    return (
        <>
            <header>
                <div>
                    <img src={logo} className="logo" alt="logo" />
                    <h1>{title}</h1>
                </div>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='todos'>Todos</NavLink>
                    <NavLink to='users'>Users</NavLink>
                </nav>
            </header>
        </>
    );
};

export default Header;