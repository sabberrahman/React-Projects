import React from 'react';
import "./Catagory.css"

const Catagory = () => {
    return (
        <div >
           <h2 className='sidebar-title'>Category</h2>

           <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark">All</span>
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark">sneakers</span>
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark">Flats</span>
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark">Heels</span>
           </label>

        </div>
    );
};

export default Catagory;