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

            {/* FORM  */}

            <div className="todos-wrapper">
                {todos &&
                    todos.map((todo) => (
                        <div className={`todos-single ${todo.important && 'is-important'}`} key={todo._id}>
                            <p>{todo.title}</p>
                            <p>{todo.description}</p>
                            <p>{todo.important ? 'verdad' : 'falso'}</p>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Todos;
