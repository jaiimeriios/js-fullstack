import { createContext, useReducer } from 'react';

export const TodosContext = createContext();
export const UsersContext = createContext();

export const todosReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                todos: action.payload,
            };
        case 'CREATE_TODOS':
            return {
                todos: [action.payload, ...state.todos],
            };
        case 'DELETE_TODOS':
            return {
                todos: state.todos.filter((w) => w._id !== action.payload._id),
            };
        case 'PATCH_TODOS':
            const patchObject = state.todos.find((arrayItem) => {
                return arrayItem._id === action.payload._id;
            });
            Object.assign(patchObject, action.payload);
            return {
                todos: state.todos,
            };
        default:
            return state;
    }
};

export const usersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                users: action.payload,
            };
        case 'CREATE_USERS':
            return {
                users: [...state.users, action.payload],
            };
        case 'DELETE_USERS':
            return {
                users: state.users.filter((w) => w._id !== action.payload._id),
            };
        case 'PATCH_USERS':
            const patchObject = state.users.find((arrayItem) => {
                return arrayItem._id === action.payload._id;
            });
            Object.assign(patchObject, action.payload);
            return {
                users: state.users,
            };
        default:
            return state;
    }
};

export const TodosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todosReducer, {
        todos: null,
    });

    return (
        <TodosContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TodosContext.Provider>
    );
};

export const UsersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, {
        users: null,
    });

    return (
        <UsersContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UsersContext.Provider>
    );
};