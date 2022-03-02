import React, { useState } from 'react';

const AddNewTodo = ({ addTodo }) => {
    const [todos, SetTodos] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todos);
        SetTodos('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>To do</label>
            <input type='text' value={todos} id='todo' onChange={(e) =>
                SetTodos(e.target.value)} />
            <input type='submit' />
        </form>
    );
};

export default AddNewTodo;