import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoWrapper from './componets/TodoWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoWrapper/>
    </>
  )
}

export default App

//create vite@latest .(dot) --for having everything in the current folder 
