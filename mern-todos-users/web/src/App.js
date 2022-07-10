import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// context providers
import { TodosContextProvider, UsersContextProvider } from './context/DataContext';

// Pages
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';

const TodosProvider = () => {
    return (
        <TodosContextProvider>
            <Todos />
        </TodosContextProvider>
    );
};
const UsersProvider = () => {
    return (
        <UsersContextProvider>
            <Users />
        </UsersContextProvider>
    );
};

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header title="MERN APP" />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todos" element={<TodosProvider />} />
                        <Route path="/users" element={<UsersProvider />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;