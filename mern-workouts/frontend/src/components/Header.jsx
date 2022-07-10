import { Link } from 'react-router-dom'
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
                    <Link to='/'>Home</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
