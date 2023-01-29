import { createContext, useReducer, useEffect } from 'react';

// exports to hook (useAuthContext) to provide context to app that requires/updates context
export const AuthContext = createContext();

// AuthContextProvider exports to index page to wrapp all content with the context
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
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

// reducer handle cases for context
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { userAuth: action.payload };
        case 'LOGOUT':
            return { userAuth: null };
        default:
            return state;
    }
};
