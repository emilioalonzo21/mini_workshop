import './App.css';
import React from 'react'
import express from 'express'
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

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

app.get('/movies', (req, res) => {
  res.send(moviesArr)
})

export default App;
