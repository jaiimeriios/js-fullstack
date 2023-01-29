import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
    const { userAuth } = useAuthContext();

    return (
        <div className="app">
            <BrowserRouter>
                <Header title="MERN APP" />
                <div className="pages">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                userAuth ? <Home /> : <Navigate to="/login" />
                            }
                        />
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
        </div>
    );
}

export default App;
