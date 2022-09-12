import { useState, useEffect } from 'react';
import { useTodosContext } from '../../hooks/useDataContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodosDetails = ({ todo }) => {
    const { dispatch } = useTodosContext();

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [important, setImportant] = useState(false);

    const [error, setError] = useState(false);

    const toggleEditMode = () => {
        setEdit(true);
        setTitle(todo.title);
        setDescription(todo.description);
        setImportant(todo.important);
    };

    // PATCH
    const handlePatch = async (e) => {
        e.preventDefault();
        setError(false);
        let _id = todo._id;
        let patchTodos = { title, description, important, _id };

        if (title === '') {
            setError(true);
            return;
        }
        const response = await fetch(`/todos/${todo._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patchTodos),
        });
        if (response.ok) {
            dispatch({ type: 'PATCH_TODO', payload: patchTodos });
        }
        setEdit(false);
    };

    const handleCancelUpdate = (e) => {
        e.preventDefault()
        setEdit(false);
    }

    // DELETE
    const handleDelete = async () => {
        const response = await fetch(`todos/${todo._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            dispatch({ type: 'DELETE_TODO', payload: todo });
        }
    };

    return (
        <>
            <div className={`todos-single ${todo.important && 'is-important'}`}>
                {edit ? (
                    <form onSubmit={handlePatch}>
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
                                checked={important ? 'checked' : ''}
                            />
                        </div>

                        <button onClick={handleCancelUpdate}>Cancel</button>
                        <button type='submit'>Update</button>
                        {error && (
                            <div className="error-message">
                                Title field required
                            </div>
                        )}
                    </form>
                ) : (
                    <>
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                        <p>{todo.important ? 'verdad' : 'falso'}</p>
                        <p>
                            {formatDistanceToNow(new Date(todo.createdAt), {
                                addSuffix: true,
                            })}
                        </p>
                        <button className="edit" onClick={toggleEditMode}>
                            Edit
                        </button>
                        <button className="delete" onClick={handleDelete}>
                            Delete
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default TodosDetails;
