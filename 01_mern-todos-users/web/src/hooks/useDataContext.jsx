import { useContext } from 'react';
import { TodosContext, UsersContext } from '../context/DataContext';

export const useTodosContext = () => {
    const context = useContext(TodosContext);
    if (!context) {
        throw Error(
            'useTodosContext must be used inside an TodosContextProvider'
        );
    }
    return context;
};

export const useUsersContext = () => {
    const context = useContext(UsersContext);
    if (!context) {
        throw Error(
            'useUsersContext must be used inside an UsersContextProvider'
        );
    }
    return context;
};