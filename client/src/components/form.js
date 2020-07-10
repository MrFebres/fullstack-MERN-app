import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

function Form() {
  const {register, handleSubmit} = useForm();

  const onSubmit = data => {
    axios({
      url: 'http://localhost:8080/save/',
      method: 'POST',
      data: data
    }).then(() => console.log('Registro guardado correctamente'))
      .catch(() => console.log('Error al guardar registro'));
  }


  return (
    <div className="form-container">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input ref={register} name="name" type="text" placeholder="Nombre" />
        <label htmlFor="pokedex">Pokedex</label>
        <input ref={register} name="pokedex" type="number" placeholder="#" step="any" />
        <label htmlFor="img">Picture</label>
        <input ref={register} name="img" type="text" defaultValue="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/#.png" />
        <label htmlFor="type1">Tipo</label>
        <select ref={register} name="type1">
          <option value="">Seleccione...</option>
          <option >Normal</option>
          <option >Fuego</option>
          <option >Agua</option>
          <option >Planta</option>
          <option >Electrico</option>
          <option >Hielo</option>
          <option >Lucha</option>
          <option >Veneno</option>
          <option >Tierra</option>
          <option >Volador</option>
          <option >Psiquico</option>
          <option >Bicho</option>
          <option >Roca</option>
          <option >Fantasma</option>
          <option >Dragon</option>
          <option >Siniestro</option>
          <option >Acero</option>
          <option >Hada</option>
        </select>
        <label htmlFor="altura">Altura</label>
        <input ref={register} name="height" type="number" step="any" />
        <label htmlFor="peso" >Peso</label>
        <input ref={register} name="weight" type="number" step="any" />
        <button id="submit-btn" onClick={() => window.location.reload(false)} >Submit</button>
      </form>
    </div>
  )
}

export default Form
