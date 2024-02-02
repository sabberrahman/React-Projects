import React from 'react';
import "./Catagory.css"
import Input from '../../Componets/Input';

const Catagory = ({handleChange}) => {
    return (
        <div >
           <h2 className='sidebar-title'>Category</h2>
           
            <div>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name="test"
                value="" />
                <span className="checkmark"></span> All
            </label>

            <Input
            handleChange={handleChange}
            value="sneakers"
            title="sneakers"
            name="test"
            />
            <Input
            handleChange={handleChange}
            value="flats"
            title="flats"
            name="test"
            />
            <Input
            handleChange={handleChange}
            value="sandals"
            title="sandals"
            name="test"
            />
            <Input
            handleChange={handleChange}
            value="heels"
            title="heels"
            name="test"
            />
            </div>
          

        </div>
    );
};

export default Catagory;