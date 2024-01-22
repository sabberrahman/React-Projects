import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
    return (
        <div className='Todo'>
           <p>go Back to India</p> 
            <div> 
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash}/>
            </div>
        </div>
    );
};

export default Todo;