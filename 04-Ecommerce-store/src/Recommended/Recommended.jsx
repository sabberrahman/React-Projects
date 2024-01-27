import React from 'react';
import "./Recommended.css"

const Recommended = () => {
    return (
        <div>
           <h2 className='recommended-title'> Recommended</h2>
           <div className="recommended-flex">
            <button className="btns">all Products</button>
            <button className="btns"> Nike</button>
            <button className="btns"> Puma</button>
            <button className="btns"> Batta</button>
            <button className="btns"> vans</button>
           </div>
            
        </div>
    );
};

export default Recommended;