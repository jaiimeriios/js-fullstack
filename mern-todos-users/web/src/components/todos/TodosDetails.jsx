import { useState } from 'react';
import { useTodosContext } from '../../hooks/useDataContext';

const TodosDetails = ({ todo }) => {
    const { dispatch } = useTodosContext();

    return (
        <>
            <div className={`todos-single ${todo.important && 'is-important'}`}>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
                <p>{todo.important ? 'verdad' : 'falso'}</p>
            </div>
        </>
    );
};

export default TodosDetails;
