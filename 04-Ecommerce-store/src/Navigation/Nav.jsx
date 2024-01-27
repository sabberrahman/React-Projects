import React from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css"

const Navigation = () => {
    return (
        
        <nav>
            <div className="nav-cointainer">
                <input type="text"
                className='search-input' 
                placeholder='enter what you looking ' />
            </div>
            <div className="profile-container">
                <a href="#"></a>
            </div>
        </nav>
      
    );
};

export default Navigation;