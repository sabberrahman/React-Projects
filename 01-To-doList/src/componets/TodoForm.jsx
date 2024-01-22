import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [ value , setValue]=useState("")
    
    const HandleSubmit = (e) => {
       e.preventDefault();
       addTodo(value)
       setValue("")
    };
    
 
    return (
        <form className='TodoForm' onSubmit={HandleSubmit}>
            <input type="text" placeholder='what is the task today' value={value} className='todo-input'onChange={(e)=> setValue(e.target.value)} />
            <button className='todo-btn'>Add Task</button>
        </form>
    );
};

export default TodoForm;