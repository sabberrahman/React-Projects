import { useState } from 'react'
import './App.css'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

//database 
import products from "./Dataa/Data"
import Card from './Componets/Card'

function App() {
  const [selectedCategory, setselectedCategory] = useState(null)
  const [query,setQuery]=useState("")
 
 
 //input filter 
  const handleInputChange = (e)=>{
     setQuery(e.target.value)
  }

  const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

   // Radio Filtering 
  const handleChange = (event) => {
    setselectedCategory(event.target.value);
  };

   // Button Filtering 
  const handleClick = (event) => {
    setselectedCategory(event.target.value);
  };

  function filteredData(products , query, selectedCategory , selected){
    let filteredProducts = products
    //filtering input items
    if (query){
      filteredProducts =filteredItems
    }

    //selected filter 
    if (selected){
      filteredProducts = filteredProducts.filter(({category , color , company ,title , newPice})=> 
      category === selected ||
      color === selected ||
      company === selected ||
      title === selected ||
      newPice === selected )
    }

    return filteredProducts.map(({img,title,star,reviews,prevPrice, newPrice})=>(
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ))
  }

  const result = filteredData(products,selectedCategory,query)

  
   

  return (
    <>
     <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange}  />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    
    
    </>
  )
}

export default App
