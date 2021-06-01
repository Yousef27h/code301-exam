"use strict";
// requiring our model in order to create new documents
const CharactersModel = require('../models/crudModel');

// create a function to add new favorite data to our DB
const createFav = async (req, res) => {
  const { name, gender, image, psiPowers } = req.body;
  CharactersModel.find({ name: name }, (error, docs) => {
    // checking whether the data already exist or not
    if (docs.length > 0) {
      res.send("Data already exist!!");
    } else {
      // create new data document
      const newFavChar = new CharactersModel({
        name: name,
        gender: gender,
        image: image,
        psiPowers: psiPowers,
      });
      // save new document in my DB
      newFavChar.save();
      res.send("A new data has been saved!");
    }
  });
};

// create function to read all  favorite data
const getFav = (req, res) => {
  CharactersModel.find({}, (error, docs) => {
    res.send(docs);
  });
};

// create function to delete specific document in favorites
const deleteFav = async (req, res) => {
  const name = req.params;
  CharactersModel.remove({ name: name }, (error, docs) => {
    if (error) {
      res.send(error);
    } else {
        // retrieve all favorite data after deleting a document
      CharactersModel.find({}, (error, docs) => {
        res.send(docs);
      });
    }
  });
};
// create function to update data in favorites
const updateFav = async(req,res)=>{
    const name  = req.params;
    const {newName, gender} = req.body;
    CharactersModel.find({name:name},(error,docs)=>{
        if (error){
            res.send(error)
        }else{
            // target and update specific data in our document
            docs[0].name = newName;
            docs[0].gender = gender;
            docs[0].save();
            res.send(docs[0])
        }
    })
}
// exporting my controller
module.exports = { createFav, getFav, deleteFav, updateFav };
