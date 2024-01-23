import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task , toggleComplete , deleteTodo}) => {
    console.log(task)
    return (
        <div className='Todo'>
           <p  onClick={()=> toggleComplete(task.id)} className={`${task.completed ? "completed":"incompleted"}`}>{task.task}</p> 
            <div> 
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=> deleteTodo(task.id)}/>
            </div>
        </div>
    );
};

export default Todo;