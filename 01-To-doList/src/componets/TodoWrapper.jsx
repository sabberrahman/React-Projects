import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";
import Todo from './Todo';
import editTodoForm from './EditTodoForm';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
    const [todos , setTodos]=useState([])
 
    const addTodo =(todo)=>{
        setTodos([...todos,{id: uuidv4(),task: todo,completed:false , isEditting:false}])
       } 

    const toggleComplete = (id) => { 
        setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ))
       }
    const deleteTodo = (id)=>{
        setTodos(todos.filter((todo)=>Todo.id !==id)) //Bolbe right is wrong :)))
    }

    const editTodo = (id)=>{
        setTodos(todos.map((todo)=> Todo.id === id ? {...Todo, isEditting: !Todo.isEditting} : todo))
    }


    return (
        <div className='TodoWrapper'>
            <h1>Make a Plan!!✨ </h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo) =>
              todo.isEditing ? (
             <EditTodoForm  />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
           
        </div>
    );
};

export default TodoWrapper;

// we want to show if editting is true it will show the editting form and if not it will show the normal default one 


// 4.addTodo("Buy groceries"), the todo parameter ,The function would then use this value to create a new todo object and add it to the todos array.

// 8. spread operator (...) to create a new array by copying all the elements from the existing todos array. as it ensures that you are not mutating the original array. Instead, you create a new array that includes all the elements of the previous array.

//  9.The purpose of UUIDs is to provide a way to uniquely identify entities or objects without the need for a centralized authority to manage the generation of identifiers.

//17. todoForm a addTodo("example") call hobe on every submit and aikhne oita kaz korbe

// parent a function ..calling child a kora jay 

//Logic== 

// {todos.map((todo,index)=>
// todo.isEditting ? 
// ( <EditTodoForm editTodo={editTodo} task={todo}/>)
//   :
// (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />  )
// )}