import { useState } from 'react';
import './App.css';
import Search from './Search';
import Result from './Result';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    search: '',
    results: [],
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
  };

  return (
    <>
      <div className="container">
        <header>
          <h2>Movie Search Website </h2>
        </header>
      </div>
      <Search handleInput={handleInput} SearchResult={SearchResult} />
      <div className="row">
       {
        state.results.map((result,i) =>(
          <div className='result  ' key={i}>
          <Result result={result} />
             </div>

        ))
       }
      </div>
     
    </>
  );
}

export default App;


