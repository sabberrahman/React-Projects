import { useEffect, useRef, useState } from 'react'
import './index.css'
import {Form } from "react-bootstrap"
import axios from 'axios';

const API_URL = "https://api.unsplash.com/search/collections";

const IMAGES_PER_PAGE=20;

function App() {
  const searchInput = useRef(null)
  const [images , setImages]= useState([])
  const [page , setPage]=useState(1)
  const [totalPages , setTotalPages]= useState(0)
  

  const handleSubmit =(e)=>{
    e.preventDefault()
    fetchImages(); // updates on submit 
    setPage(1); // back to page 1 when submit smt new
  }

  const handleSelection=(selection)=>{
    searchInput.current.value=selection;
    fetchImages();
    setPage(1); //back to page 1 when clicking suggestion
  }

  const fetchImages = async () => {
    try {
      const result = await axios.get(
        `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
      );
      const data =result.data;
    setImages(data.results)
    setTotalPages(data.total_pages)
      console.log("result", data )
    } catch (error) {
      console.log("error")   
  };
}
//calling api again on buttun click
 useEffect(()=>{
  fetchImages();
 },[page])


  return (
    <div className='container'>
      <h1 className='title'>
        What are you looking for 
       </h1>
      <div className='search-section'>

        <form onSubmit={handleSubmit} >
          <Form.Control type="search" placeholder="Type something to search.."
          className="search-input"
          ref={searchInput} />
        </form>
      </div>
      <div className="filters">
          <div onClick={()=>handleSelection("Nature")}>Nature</div>
          <div onClick={()=>handleSelection("Cats")}>Cats</div>
          <div onClick={()=>handleSelection("Mushroom")}>Mushroom</div>
          <div onClick={()=>handleSelection("Coffee")} >Coffee</div>
        </div>
        <div className="images">
          {images.map((image)=>{
             return (
              <img src={image.cover_photo.urls.small} 
              alt={image.cover_photo.alt_description}
              className='image'
              key={image.cover_photo.id}/>
             )
          })}
        </div>
        <div className="buttons">
          {page > 1 && (<button onClick={()=> setPage(page-1)} className='btn' >previous</button>)}
          {page < totalPages && (<button onClick={()=> setPage(page+1)} className='btn'>next</button>)}
        </div>
    </div>
  )
} 

export default App;

// we need to call api again when page value changes ..we going to use useEff

// same code 2 bar or multi bar use na kore ekta method e call kora better 
// const resetSearch =()=>{
//   fetchImages();
//   setPage(1);
// }
