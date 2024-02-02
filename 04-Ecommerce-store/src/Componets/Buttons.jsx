import React from 'react';

const Buttons = ({onClickHanlder, value , title}) => {
    return (
        <button onClick={onClickHanlder}
         value={value}
         className='btns'> {title}
        </button>
    );
};

export default Buttons;