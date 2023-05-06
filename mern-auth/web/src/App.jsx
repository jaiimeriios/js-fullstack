import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import reactLogo from '/react.svg';

function App() {
    return (
        <>
            <img src={reactLogo} className="logo" alt="React logo" />
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="register">Register</Link>
                <Link to="login">Login</Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

const Home = () => {
    return <h1>Home Page</h1>;
};
