import { useState } from 'react';
import { useTodosContext } from '../../hooks/useDataContext';

const TodosForm = () => {
    const { dispatch } = useTodosContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [important, setImportant] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const todos = { title, description, important };

        const response = await fetch('http://localhost:666/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todos),
        });

        const json = await response.json();

        if (!response.ok) {
            console.log('error');
        }
        if (response.ok) {
            setTitle('');
            setDescription('');
            setImportant(false);
            dispatch({ type: 'CREATE_TODOS', payload: json });
            console.log('new added', json);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todos-form">
            <div>
                <label>Todo:</label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>

            <div>
                <label>Description:</label>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </div>
            <div>
                <label>Important?</label>
                <input
                    type="checkbox"
                    onChange={(e) => setImportant(!important)}
                    value={important}
                />
            </div>

            <button>Add Todo</button>
        </form>
    );
};

export default TodosForm;
