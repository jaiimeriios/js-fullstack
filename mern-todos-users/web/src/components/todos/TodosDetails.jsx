import { useState, useEffect } from 'react';
import { useTodosContext } from '../../hooks/useDataContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodosDetails = ({ todo }) => {
    const { dispatch } = useTodosContext();

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
                <p>{todo.title}</p>
                <p>{todo.description}</p>
                <p>{todo.important ? 'verdad' : 'falso'}</p>
                <p>
                    {formatDistanceToNow(new Date(todo.createdAt), {
                        addSuffix: true,
                    })}
                </p>
                <span className="delete" onClick={handleDelete}>
                    Delete
                </span>
            </div>
        </>
    );
};

export default TodosDetails;
