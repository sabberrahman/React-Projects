import React from 'react';
import "./Price.css"
import Input from '../../Componets/Input';

const Price = ({handleChange}) => {
    return (
        <div className='ml'>
          <h2 className="sidebar-title price-title">Price</h2>
          <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name="test2"
                value="" />
                <span className="checkmark"></span> All
            </label>

            <Input
            handleChange={handleChange}
            value={50}
            title="$0-50"
            name="test2"
            />
            
            <Input
            handleChange={handleChange}
            value={150}
            title="$50-150"
            name="test2"
            />
            
            <Input
            handleChange={handleChange}
            value={200}
            title="$150-200"
            name="test2"
            />
            
            <Input
            handleChange={handleChange}
            value={300}
            title="Over $200"
            name="test2"
            />

          
        </div>
    );
};

export default Price;

{/* <label className="sidebar-label-container">
<input type="radio" name="2test"/>
<span className="checkmark"></span>All
</label> */}