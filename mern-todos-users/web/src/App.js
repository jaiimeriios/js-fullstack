import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header title="MERN APP" />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path="/todos" element={<Todos /> } />
                    </Routes>
                    <Routes>
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;