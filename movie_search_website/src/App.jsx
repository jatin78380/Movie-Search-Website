import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Result from './Result'
import Search from './Search'
function App() {
  const [count, setCount] = useState(0)
 const [state,setState] =useState({
  search:'',
  results:[]
 })
 const handleInput =(e)=>{
  let search = e.target.value;
  setState((prevState)=>{
    return {
     ...prevState,
      search:search
    }
  })
 }
 const SearchResult=(e)=>{
  if(e.key == "Enter"){
   axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a2fcceb8'+ '&s=' + state.search)
   .then(res =>{
    setState(prevState=>{
      return {...prevState, results: res.data.Search};
      })

    })
   .catch(err => console.log(err))
  }
 }
  return (
  <>
 
 <div className="container">
      <header>
        <h2>Movie Search</h2>
        <Search handleInput={handleInput} SearchResult={SearchResult}/>
       
       
        
        {
        state.results.map((result,i)=>(
          <div>
          <Result  result = {result}/>
         </div>

        ))
      }

       
      </header>
    </div>
  
  </>
  )
}


export default App;
