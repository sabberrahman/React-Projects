import React from 'react';
import "./Product.css"
import { AiFillStar } from 'react-icons/ai';
import { LuShoppingBag } from "react-icons/lu";

const Products = () => {
    return (
        <section>
            <section className="card-cotainer">
                <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"  />
                <div className="card-details">
                    <h3 className="card-title">shoe</h3>
                    <AiFillStar/> <AiFillStar/>  <AiFillStar/>  <AiFillStar/> 
                    <span className='total-reviews'>123</span>
                    <section className="card-price">
                        <div className="price">
                            <del>1000$</del> 999$
                        </div>
                        <div className="bag">
                        <LuShoppingBag />
                        </div>
                    </section>
                </div>
                
            </section>
           
        </section>
    );
};

export default Products;