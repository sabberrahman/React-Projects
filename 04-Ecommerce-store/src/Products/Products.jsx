import React from 'react';
import "./Product.css"
import { AiFillStar } from 'react-icons/ai';
import { LuShoppingBag } from "react-icons/lu";
import Card from '../Componets/Card';

const Products = () => {
    return (
        <section className='card-container'>
          <Card/> <Card/><Card/><Card/><Card/><Card/><Card/>
        </section>
    );
};

export default Products;

//Refactorical kora ---same code bar bar jakhne use kora hoisa 