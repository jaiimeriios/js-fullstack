import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';

// pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header title={'MERN Auth Users Todos'} />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
