import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Ecommerce store</h1>
     <Navigation/>
     <Products/>
     <Recommended/>
    </>
  )
}

export default App
