import { useEffect } from 'react';
import { useTodosContext } from '../hooks/useDataContext';

import TodosForm from '../components/todos/TodosForm';
import TodoDetails from '../components/todos/TodosDetails';

const Todos = () => {
    const { todos, dispatch } = useTodosContext();

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('/todos');
            const data = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_TODOS', payload: data.reverse() });
            }
        };
        fetchTodos();
    }, [dispatch]);

    return (
        <>
            <h2>Todos</h2>

            <TodosForm />

            <div className="todos-wrapper">
                {todos &&
                    todos.map((todo) => (
                        <TodoDetails key={todo._id} todo={todo} />
                    ))}
            </div>
        </>
    );
};

export default Todos;
