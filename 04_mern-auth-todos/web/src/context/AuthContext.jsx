import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userAuthReducer, {
        userAuth: null,
    });

    useEffect(() => {
        const authuser = JSON.parse(localStorage.getItem('authuser'));
        if (authuser) {
            dispatch({ type: 'LOGIN', payload: authuser });
        }
    }, []);

    console.log('AuthContext State:: ', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const userAuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { userAuth: action.payload };
        case 'LOGOUT':
            return { userAuth: null };
        default:
            return state;
    }
};
