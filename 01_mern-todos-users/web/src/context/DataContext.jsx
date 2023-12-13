import { createContext, useReducer } from 'react';

export const TodosContext = createContext();
export const UsersContext = createContext();

export const todosReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                todos: action.payload,
            };
        case 'CREATE_TODO':
            return {
                todos: [action.payload, ...state.todos],
            };
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter((t) => t._id !== action.payload._id),
            };
        case 'PATCH_TODO':
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
        case 'CREATE_USER':
            return {
                users: [...state.users, action.payload],
            };
        case 'DELETE_USER':
            return {
                users: state.users.filter((u) => u._id !== action.payload._id),
            };
        case 'PATCH_USER':
            const patchObject = state.users.find((arrayItem) => {
                return arrayItem._id === action.payload._id;
            });
            Object.assign(patchObject, action.payload);
            return {
                users: state.users,
            };


            // const patchObject = state.users.find((user) => {
            //     return user._id === action.payload._id;
            // });
            // const updated = Object.assign(patchObject, action.payload);
            // return {
            //     users: updated
            // };

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