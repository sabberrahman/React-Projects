import React from 'react';
import "./Sidebar.css"
import Price from './Price/Price';
import Colors from './colors/Colors';
import Catagory from './Catagory/Catagory';

const Sidebar = ({handleChange}) => {
    return (
        <section className='sidebar'>
           <div className="logo-container">
            <h1>🛒</h1>
           </div>

           <Catagory handleChange={handleChange} />
           <Price handleChange={handleChange}/>
           <Colors handleChange={handleChange}/>


        </section>
    );
};

export default Sidebar;