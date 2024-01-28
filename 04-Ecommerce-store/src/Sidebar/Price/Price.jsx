import React from 'react';
import "./Price.css"

const Price = () => {
    return (
        <div className='ml'>
          <h2 className="sidebar-title price-title">Price</h2>
          <label className="sidebar-label-container">
            <input type="radio" name="2test"/>
            <span className="checkmark"></span>All
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="2test"/>
            <span className="checkmark"></span>$0-100
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="2test"/>
            <span className="checkmark"></span>$100-200
           </label>
           <label className="sidebar-label-container">
            <input type="radio" name="2test"/>
            <span className="checkmark"></span>$200-500
           </label>

          
        </div>
    );
};

export default Price;