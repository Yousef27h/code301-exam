'use strict';
const superagent = require('superagent');
const CharactersClass = require('../models/mainClass');

// create function to retrive all data from API with limit of 10 as a query 
const charsData = async (req, res) => {
    superagent.get('https://psychonauts-api.herokuapp.com/api/characters?limit=10').then(data=>{
        // create object instaces of every character data we get from API
        const charArr = data.body.map(char => new CharactersClass(char));
        res.send(charArr);
    }).catch(error =>{
        res.send(error)
    })
};

module.exports = charsData;