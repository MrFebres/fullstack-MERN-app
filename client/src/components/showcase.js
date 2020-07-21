import React from 'react';

import Pokemon from './pokemon';

const ShowCase = ({ pokemons = {}, deletePokemon }) => {
  return (
    <div className="showcase">
      {Object.values(pokemons).map(pokemon => (
        <Pokemon
          key={pokemon._id}
          pokemon={pokemon}
          deletePokemon={deletePokemon}
        />
      ))}
    </div>
  );
};

export default ShowCase;
