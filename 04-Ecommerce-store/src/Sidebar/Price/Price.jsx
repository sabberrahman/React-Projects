import React from 'react';
import "./Price.css"
import Input from '../../Componets/Input';

const Price = () => {
    return (
        <div className='ml'>
          <h2 className="sidebar-title price-title">Price</h2>
           <div>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            </div>
          
        </div>
    );
};

export default Price;

{/* <label className="sidebar-label-container">
<input type="radio" name="2test"/>
<span className="checkmark"></span>All
</label> */}