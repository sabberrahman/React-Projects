import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";
import Todo from './Todo';
uuidv4();

const TodoWrapper = () => {
    const [todos , setTodos]=useState([])
 
    const addTodo =(todo)=>{
        setTodos([...todos,{id: uuidv4(),task: todo,completed:false , isEditting:false}])
        console.log(todos)
    }
    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo}/>
            <Todo/>
        </div>
    );
};

export default TodoWrapper;


// 4.addTodo("Buy groceries"), the todo parameter ,The function would then use this value to create a new todo object and add it to the todos array.

// 8. spread operator (...) to create a new array by copying all the elements from the existing todos array. as it ensures that you are not mutating the original array. Instead, you create a new array that includes all the elements of the previous array.

//  9.The purpose of UUIDs is to provide a way to uniquely identify entities or objects without the need for a centralized authority to manage the generation of identifiers.