import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';

import Layout from './components/Layout';
import IndexPage from './Pages/IndexPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CreatePost from './Pages/CreatePost';

const App = () => {
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="create" element={<CreatePost />} />
                </Route>
            </Routes>
        </UserContextProvider>
    );
};

export default App;
