import React from 'react';
import "./Recommended.css"
import Buttons from '../Componets/Buttons';

const Recommended = ({handleClick}) => {
    return (
        <div>
           <h2 className='recommended-title'> Recommended</h2>
           <div className="recommended-flex">
            <Buttons onClickHanlder={handleClick} value="" title="All Products"/>
            <Buttons onClickHanlder={handleClick} value="Nike" title="Nike"/>
            <Buttons onClickHanlder={handleClick} value="Adidas" title="Adidas"/>
            <Buttons onClickHanlder={handleClick} value="Puma" title="Puma"/>
            <Buttons onClickHanlder={handleClick} value="Vans" title="Vans"/>
           </div>
            
        </div>
    );
};

export default Recommended;

{/* <button className="btns">all Products</button>
<button className="btns"> Nike</button>
<button className="btns"> Puma</button>
<button className="btns"> Batta</button>
<button className="btns"> vans</button> */}