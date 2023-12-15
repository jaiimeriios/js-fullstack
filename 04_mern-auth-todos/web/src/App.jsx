import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Header from './components/Header';

// pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
    const { userAuth } = useAuthContext();

    return (
        <>
            <BrowserRouter>
                <Header title={'MERN Auth Users Todos'} />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/signup"
                            element={
                                !userAuth ? <Signup /> : <Navigate to="/" />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                !userAuth ? <Login /> : <Navigate to="/" />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
