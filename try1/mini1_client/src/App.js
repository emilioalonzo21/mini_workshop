import './App.css';
import React, { useEffect} from 'react'
import {movies} from './App.js'
import SearchBar from './components/searchBar';


function App() {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>{ movies.map(movie => <p>{movie.title}</p>) } </p>
      </header>
    </div>
  );
}


export default App;