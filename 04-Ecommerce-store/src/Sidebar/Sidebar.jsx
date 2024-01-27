import React from 'react';
import "./Sidebar.css"
import Price from './Price/Price';
import Colors from './colors/Colors';
import Catagory from './Catagory/Catagory';

const Sidebar = () => {
    return (
        <section className='sidebar'>
           <div className="logo-container">
            <h1>🛒</h1>
           </div>

           <Catagory/>
           <Colors/>
           <Price/>


        </section>
    );
};

export default Sidebar;