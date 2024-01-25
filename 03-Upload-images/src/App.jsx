import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Upload Your Images</h1>
      <input type="file"  />
      <button type="button"> Upload it !!</button>
    </>
  )
}

export default App
