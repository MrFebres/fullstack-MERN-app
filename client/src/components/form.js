import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = ({ addPokemon }) => {
  const { register, handleSubmit } = useForm();

  const typeOptions = [
    'Normal',
    'Fuego',
    'Agua',
    'Planta',
    'Electrico',
    'Hielo',
    'Lucha',
    'Veneno',
    'Tierra',
    'Volador',
    'Psiquico',
    'Bicho',
    'Roca',
    'Fantasma',
    'Dragon',
    'Siniestro',
    'Acero',
    'Hada',
  ];

  const onSubmit = data => {
    axios({
      url: 'http://localhost:8080/save/',
      method: 'POST',
      data,
    })
      .then(res => {
        console.log('Registro guardado correctamente');
        document.getElementById('form').reset();
        addPokemon(res.data.pokemon);
      })
      .catch(() => console.log('Error al guardar registro'));
  };

  return (
    <div className="form-container">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input ref={register} name="name" type="text" placeholder="Nombre" />
        <label htmlFor="pokedex">Pokedex</label>
        <input
          ref={register}
          name="pokedex"
          type="number"
          placeholder="#"
          step="any"
        />
        <label htmlFor="img">Picture</label>
        <input
          ref={register}
          name="img"
          type="text"
          defaultValue="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/#.png"
        />
        <label htmlFor="type1">Tipo</label>
        <select ref={register} name="type1">
          <option value="">Seleccione...</option>
          {typeOptions.map(value => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <label htmlFor="altura">Altura</label>
        <input ref={register} name="height" type="number" step="any" />
        <label htmlFor="peso">Peso</label>
        <input ref={register} name="weight" type="number" step="any" />
        <button id="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
