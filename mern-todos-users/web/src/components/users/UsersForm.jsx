import { useState } from 'react';
import { useUsersContext } from '../../hooks/useDataContext';

const UsersForm = ({ todo }) => {
    const { dispatch } = useUsersContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit User');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="" id="" />

            <button>Add</button>
        </form>
    );
};

export default UsersForm;
