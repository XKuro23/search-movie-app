import './App.css';
import React,{useEffect,useState} from "react";

import MovieCard from "./components/MovieCard";


function App() {
  const ApiUrl ="http://www.omdbapi.com/?i=tt3896198&apikey=980e576c";
  const [titles, setTitles] = useState('');
  const [movies, setMovies] = useState([]);
  
  
  const searchMovies= async (title) => {
    const response= await fetch(`${ApiUrl}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search);
  };
  useEffect(() =>{
    searchMovies(titles);
  },[titles]);
  return (
    <div className="app">
      <h1 className="AppTitle">Movie Search</h1>
      <div className='search'>
        <input type="text" onChange={(e)=>{setTitles(e.target.value)}} value={titles}/>
      </div>
      <div>
      {movies && movies.length>0?
        <div className='container'>
          {movies.map((movie)=>(
              <MovieCard movie={movie} key={movie.imdbID}/>
          ))}
        </div>:
        <div className='empty'>
          <h2>Movie Not Found</h2>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
