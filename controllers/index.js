'use strict';

const PokePost = require('../models');
const request = require('request');
const db = require('mongodb');

function insertPokes(req, res) {
  PokePost.countDocuments({}).exec((err, count) => {
    if (count !== 0) {
      return res.status(200).send({
        message:
          'No llenamos la base de datos de nuevo porque somos muy inteligentes.',
      });
    }

    for (let i = 1; i <= 150; i++) {
      request.get(
        'https://pokeapi.co/api/v2/pokemon/' + i,
        (error, res, body) => {
          if (error) return console.log('Hubo un error ' + error);
          let data = JSON.parse(body);
          let name = data.species.name;
          let pokedex = data.id;
          let img = data.sprites.front_default;
          let type1 = data.types[0].type.name;
          let height = data.height;
          let weight = data.weight;
          let info = { name, pokedex, img, type1, height, weight };

          let pokemon = new PokePost(info);
          pokemon.save((error, res) => {
            if (error)
              return console.err('Error en guardar pokemon', error.message);
          });
        }
      );
    }
    res.status(200).send({ message: 'Base de datos llenada exitosamente.' });
  });
}

function getAllPoke(req, res) {
  PokePost.find({}).exec((err, docs) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición ${err}` });
    if (!docs) return res.status(404).send({ message: `El pokemon no existe` });
    res.json(docs);
  });
}

function savePoke(req, res) {
  let poke = new PokePost();
  poke.name = req.body.name;
  poke.pokedex = req.body.pokedex;
  poke.img = req.body.img;
  poke.type1 = req.body.type1;
  poke.height = req.body.height;
  poke.weight = req.body.weight;

  poke.save((err, pokeStored) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al salvar el pokemon ${err}` });

    res.status(200).send({ pokemon: pokeStored });
  });
}

function deletePoke(req, res) {
  let pokeId = req.params.id;

  PokePost.findByIdAndDelete(pokeId, (error, response) => {
    if (error) return console.log(`Error al borrar el pokemon: ${error}`);
  });
  res.status(200).send({ message: `El pokemon ha sido eliminado` });
}

module.exports = {
  insertPokes,
  getAllPoke,
  savePoke,
  deletePoke,
};
