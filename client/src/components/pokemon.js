import React from 'react';

const Pokemon = props => {
  const { pokemon, deletePokemon } = props;
  const deleteHandler = () => deletePokemon(pokemon._id);

  return (
    <article key={pokemon._id} className="card">
      <img src={pokemon.img} alt="" />
      <h3>{pokemon.name}</h3>
      <span className="">
        <strong>Pokedex:</strong> {pokemon.pokedex}
      </span>
      <span className="">
        <strong>Altura:</strong> {pokemon.height}
      </span>
      <span className="">
        <strong>Peso:</strong> {pokemon.weight}
      </span>
      <span className="type">{pokemon.type1}</span>
      <div className="btn-group">
        <button className="del-btn" type="button" onClick={deleteHandler}>
          Borrar
        </button>
      </div>
    </article>
  );
};

export default Pokemon;
