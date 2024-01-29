import { useState } from 'react'
import './App.css'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

//database 
import products from "./Dataa/Data"

function App() {
  const [selectedCategory, setselectedCategory] = useState(null)

  //input filter 
  const [query,setQuery]=useState("")

  const handleInputChange = (e)=>{
     setQuery(e.target.value)
  }

   // Radio Filtering 
  const handleChange = (event) => {
    setselectedCategory(event.target.value);
  };

   // Button Filtering 
  const handleClick = (event) => {
    setselectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

   

  return (
    <>
     <Sidebar/>
     <Navigation/> 
     <Recommended/>
     <Products/>
    
    </>
  )
}

export default App
