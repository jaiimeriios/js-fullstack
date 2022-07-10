import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Pages
import Home from './pages/Home';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header title="MERN APP" />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;