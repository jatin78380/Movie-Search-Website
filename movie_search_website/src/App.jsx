import { useState } from 'react';
import './App.css';
import Search from './Search';
import Result from './Result';
import Detail from './Detail';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    search: '',
    results: [],
    selected:{}
  });

  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return {
        ...prevState,
        search: search,
      };
    });
  };
  const openDetail =(id)=>{
    axios.get('http://www.omdbapi.com/?i='+id+'&apikey=a2fcceb8')
    .then(({data})=>{
      setState((prevState) => {
        return {
         ...prevState,
          selected: data,
        }})

    })
    .catch(err => console.log(err));
    
  }

  const SearchResult = (event) => {
    if (event.key === 'Enter') {
     axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a2fcceb8'+'&s='+state.search)
     .then(res => {
        setState((prevState) => {
          return {
           ...prevState,
            results: res.data.Search,
          };
        });
      })
     .catch(err => console.log(err));
    }
  }
const close =()=>{
  setState((prevState) => {
    return {
     ...prevState,
      selected: {},
    };
  });
}
  return (
    <>
    <div className='container'>
      {typeof state.selected.Title != "undefined" ? <Detail selected={state.selected} close={close}/> : <header>
      <h2>Movie Search Website </h2>

      <Search handleInput={handleInput} SearchResult={SearchResult} />
       <div className="container">
        <div className="row">
          {

            state.results.map((result,i)=>{
              return(
              <div className="col2">
                <Result result={result} openDetail={openDetail}/>
              </div>
              )
            })
          }
        </div>
       </div>

     </header>}
     
    </div>


      
     
    </>
  );
}

export default App;


