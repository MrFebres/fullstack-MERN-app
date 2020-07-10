'use strict'

const Router = require('express').Router();
const pokeCtrl = require('./controllers')

Router.get('/', (req, res) => pokeCtrl.insertPokes(req, res));
Router.get('/poke/', (req, res) => pokeCtrl.getAllPoke(req, res));
Router.post('/save/', (req, res) => pokeCtrl.savePoke(req, res));
Router.post('/poke/:id', (req, res) => pokeCtrl.deletePoke(req, res));

module.exports = Router