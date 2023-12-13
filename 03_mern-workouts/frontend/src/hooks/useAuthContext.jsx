import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Exports context to Components -> export 'dispatch' and 'userAuth' from ./context/AuthContext
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error(
            'useAuthContext must be used inside an AuthContextProvider'
        );
    }

    return context;
};