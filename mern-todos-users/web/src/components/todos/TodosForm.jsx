import { useState } from 'react';
import { useTodosContext } from '../../hooks/useDataContext';

const TodosForm = ({ todo }) => {
    const { dispatch } = useTodosContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit todos');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="" id="" />

            <button>Add</button>
        </form>
    );
};

export default TodosForm;
