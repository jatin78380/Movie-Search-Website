import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <header>
        <h2>Movie Search</h2>
        <input type='text' className='inputsearch' placeholder='Search the movie here..'></input>
      </header>
     </div>
     <div>
      
     </div>
       
    </>
  )
}

export default App
