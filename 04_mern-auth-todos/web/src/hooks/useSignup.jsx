import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const { dispatch } = useAuthContext();

    const signup = async (username, email, password) => {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:666/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        const authjson = await response.json();

        if (!response.ok) {
            setLoading(false);
            setError(authjson.error);
        }
        if (response.ok) {
            // save user to localstorage
            localStorage.setItem('authuser', JSON.stringify(authjson));

            // Update the auth context
            dispatch({ type: 'LOGIN', payload: authjson });

            setLoading(false);
        }
    };

    return { signup, loading, error };
};
