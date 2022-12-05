import {create_movies} from './initial_movies.js'


const { response } = require('express');
const express = require('express');
const app = express();
const port = 8081;

app.get('/', (request, response) => {
    response.send('The App is up and running')
})

app.listen(port, ()  => {
    console.log('Your Knex and Express apps are running!')
})

app.get('/movies', (req, res) => {
    res.send(movies)
})


 