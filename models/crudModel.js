"use strict";

const mongoose = require("mongoose");

// Create our schemas containing the data structure
const PsiPowers = new mongoose.Schema({
  name: String,
});
const Characters = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  gender: String,
  image: String,
  psiPowers: [PsiPowers],
});
// create model from schemas
const CharactersModel = mongoose.model("char", Characters);
// export model
module.exports = CharactersModel;
