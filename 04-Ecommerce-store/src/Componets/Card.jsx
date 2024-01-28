import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { LuShoppingBag } from "react-icons/lu";

const Card = () => {
    return (

        <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        className='card-img'  />
        <div className="card-details">
            <h3 className="card-title">shoe</h3>
            <AiFillStar className='rating-star'/> <AiFillStar className='rating-star'/>  <AiFillStar className='rating-star'/>  <AiFillStar className='rating-star'/> 
            <span className='total-reviews'>123</span>
            <section className="card-price">
                <div className="price">
                    <del>1200$</del> 999$ 
                </div>
                <div className="bag">
                    <LuShoppingBag  className='bag-icon'/>
                </div>
            </section>
        </div>
    </section>
       
    );
};

export default Card;