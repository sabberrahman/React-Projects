import React from 'react';
import "./Colors.css"
import Input from '../../Componets/Input';

const Colors = ({handleChange}) => {
    return (
        <div className='ml'>
          <h2 className="sidebar-title price-title">Colors</h2>
          <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name="test3"
                value="" />
                <span className="checkmark"></span> All
            </label>
            
            <Input
            handleChange={handleChange}
            value="black"
            title="black"
            name="test3"
            color="black"
            />
            
            <Input
            handleChange={handleChange}
            value="red"
            title="red"
            name="test3"
            color="red"
            />
            <Input
            handleChange={handleChange}
            value="green"
            title="green"
            name="test3"
            color="green"
            />
            <Input
            handleChange={handleChange}
            value="blue"
            title="blue"
            name="test3"
            color="blue"
            />

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name="test3"
                value="white" style={{backgroundColor:"white", border:"2px solid black"}} />
                <span className="checkmark"></span> white
            </label>
        </div>
    );
};

export default Colors;

{/* <label className="sidebar-label-container">
            <input type="radio" name="3test"/>
            <span className="checkmark"></span>All
           </label> */}