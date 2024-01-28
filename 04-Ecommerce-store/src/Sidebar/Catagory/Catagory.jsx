import React from 'react';
import "./Catagory.css"

const Catagory = () => {
    return (
        <div >
           <h2 className='sidebar-title'>Category</h2>

           <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>All
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark" ></span>sneakers
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark" ></span>Flats
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>Heels
           </label>

        </div>
    );
};

export default Catagory;