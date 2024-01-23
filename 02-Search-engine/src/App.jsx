import { useRef, useState } from 'react'
import './index.css'
import {Form } from "react-bootstrap"

function App() {
  const searchInput = useRef(null)

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(searchInput) // current value tye search value
    console.log(searchInput.current.value)
  }

  const handleSelection=()=>{
    
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
    </div>
  )
}

export default App
