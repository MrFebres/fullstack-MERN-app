'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokeSchema = Schema({
  name: {type:String, required:true},
  pokedex: Number,
  img: String,
  type1: String,
  height: Number,
  weight: Number
}, {
  collection: 'pokemons'
})

const PokePost = mongoose.model('Poke', pokeSchema);

module.exports = PokePost

