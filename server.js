'use strict';
// require server packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
//initialize our server packages
const app = express();
// define server port
const PORT = process.env.PORT || 3031;
// connect to mongoose
mongoose.connect('mongodb://localhost:27017/chars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// define our middlewares
app.use(cors());
app.use(express.json());
// require controllers
const charsData = require('./controllers/mainData');
const crudControllers = require('./controllers/crudControllers')
// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});
// create endpoint for getting data from API
app.get('/get-characters', charsData)

// ***create CRUD endpoints***
// endpoint for adding new favorite
app.post('/get-characters/favorite', crudControllers.createFav)

// endpoint for getting out favorites data
app.get('/get-characters/favorite', crudControllers.getFav)

// endpoint for deleting an item from our favorites
app.delete('/get-characters/favorite/:name', crudControllers.deleteFav)

//endpoint for updating an item in our favorites
app.put('/get-characters/favorite/:name', crudControllers.updateFav)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});