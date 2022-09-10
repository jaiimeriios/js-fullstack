import { useState } from 'react';
import { useTodosContext } from '../../hooks/useDataContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodosDetails = ({ todo }) => {
    const { dispatch } = useTodosContext();

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
            </div>
        </>
    );
};

export default TodosDetails;
