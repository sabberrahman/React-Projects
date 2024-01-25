import { useEffect, useRef, useState } from 'react'
import './index.css'
import {Form } from "react-bootstrap"
import axios from 'axios';

const API_URL = "https://api.unsplash.com/search/collections";

const IMAGES_PER_PAGE=20;

function App() {
  const searchInput = useRef(null)
  const [images , setImages]= useState([])
  const [totalPages , setTotalPages]= useState(0)
  

  const handleSubmit =(e)=>{
    e.preventDefault()
    fetchImages();
    // console.log(searchInput) -- current value tye search value
    // console.log(searchInput.current.value)
  }

  const handleSelection=(selection)=>{
    searchInput.current.value=selection;
    fetchImages();
  }

  const fetchImages = async () => {
    try {
      const result = await axios.get(
        `${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
      );
      const data =result.data;
    setImages(data.results)
    setTotalPages(data.total_pages)
      console.log("result", data )
    } catch (error) {
      console.log("error")   
  };
 
  
}


  return (
    <div className='container'>
      <h1 className='title'>Image search karlo </h1>
      <div className='search-section'>

        <form onSubmit={handleSubmit} >
          <Form.Control type="search" placeholder="Type something to search.."
          className="search-input"
          ref={searchInput} />
        </form>
      </div>
      <div className="filters">
          <div onClick={()=>handleSelection("nature")}>nature</div>
          <div onClick={()=>handleSelection("cats")}>cats</div>
          <div onClick={()=>handleSelection("city")}>city</div>
          <div onClick={()=>handleSelection("food")} >food</div>
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
    </div>
  )
}

export default App;
