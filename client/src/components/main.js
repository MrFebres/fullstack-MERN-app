import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from './form';
import ShowCase from './showcase';

function Main() {
  const [pokemons, setPokemons] = useState({});

  const getPokemons = () => {
    axios
      .get('http://localhost:8080/poke/')
      .then(res => {
        const { data } = res;
        console.log('getPokemons', res);
        // const pokemons = data.map(el => { return el.id }) // -> [_id, _id, ...]
        const initialState = data.reduce(
          (state, pokemon) => ({ ...state, [pokemon._id]: pokemon }),
          {}
        ); // -> [_id, _id, ...]
        return setPokemons(initialState);
      })
      .catch(err => console.log('Error al obtener data de DB', err));
  };

  const addPokemon = pokemon => {
    const { _id } = pokemon;
    setPokemons({ ...pokemons, [_id]: pokemon });
  };

  const deletePokemon = id => {
    const { [id]: deletedPokemon, ...dataWithoutDeletedRecord } = pokemons;
    setPokemons(dataWithoutDeletedRecord);
    axios
      .post('http://localhost:8080/poke/' + id)
      .then(res => console.log('Registro se ha eliminado, ', res))
      .catch(err => {
        console.log('Error al eliminar registro, ', err);
        addPokemon(deletedPokemon);
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="main">
      <Form addPokemon={addPokemon} />
      <ShowCase pokemons={pokemons} deletePokemon={deletePokemon} />
    </div>
  );
}

export default Main;
