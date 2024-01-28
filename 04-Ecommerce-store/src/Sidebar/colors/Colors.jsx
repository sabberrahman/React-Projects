import React from 'react';
import "./Colors.css"
import Input from '../../Componets/Input';

const Colors = () => {
    return (
        <div className='ml'>
          <h2 className="sidebar-title price-title">Colors</h2>
         <div>
          <Input/><Input/><Input/><Input/><Input/><Input/>
         </div>
          
        </div>
    );
};

export default Colors;

{/* <label className="sidebar-label-container">
            <input type="radio" name="3test"/>
            <span className="checkmark"></span>All
           </label> */}