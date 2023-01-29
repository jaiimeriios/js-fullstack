import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const { dispatch } = useAuthContext();
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const authjson = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(authjson.error);
        }
        if (response.ok) {
            // save user to localstorage
            localStorage.setItem('authuser', JSON.stringify(authjson));

            // Update the auth context
            dispatch({ type: 'LOGIN', payload: authjson });

            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};
