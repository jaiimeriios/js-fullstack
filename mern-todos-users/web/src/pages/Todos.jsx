import { useEffect } from 'react';
import { useTodosContext } from '../hooks/useDataContext';

// import WorkoutsDetails from '../components/WorkoutsDetails';
// import WorkoutForm from '../components/WorkoutForm';

const Todos = () => {
    const { todos, dispatch } = useTodosContext();

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('http://localhost:666/todos');
            const data = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_TODOS', payload: data });
            }
        };

        fetchTodos();
    }, [dispatch]);

    return (
        <>
            <h2>Todos</h2>
            <div className="todos-wrapper">
                {/* FORM  */}
                <div className="todos">
                    {
                    todos &&
                        todos.map((todo) => (
                            <p key={todo._id}>{todo.title}</p>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Todos;
