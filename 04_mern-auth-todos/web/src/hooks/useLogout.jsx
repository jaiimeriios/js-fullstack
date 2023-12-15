import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = async () => {
        localStorage.removeItem('authuser');
        dispatch({ type: 'LOGOUT' });
    };

    return {logout}
};
