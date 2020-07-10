import React, { useState, useEffect } from 'react'
import axios from "axios";
import { uniqBy } from 'lodash';

function ShowCase() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('http://localhost:8080/poke/')
      .then(res => {
        let data = [...res.data];
        data = uniqBy(data, 'name');
        let postData = data.map(el => 
          <React.Fragment key={el._id}>
            <article className='card'>
              <img src={el.img} alt="" />
              <h3>{el.name}</h3>
              <span className=""><strong>Pokedex:</strong> {el.pokedex}</span>
              <span className=""><strong>Altura:</strong> {el.height}</span>
              <span className=""><strong>Peso:</strong> {el.weight}</span>
              <span className="type">{el.type1}</span>
              <div className="btn-group">
                <button className="del-btn" type="button" onClick={() => deleteRecord(el._id)}>Borrar</button>
              </div>
            </article>
          </React.Fragment>)
          return setData(postData)
      }).catch(err => console.log('Error al obtener data de DB', err));
  }

  const deleteRecord = id => {
    axios.post('http://localhost:8080/poke/' + id).then(res => console.log('Registro se ha eliminado, ', res)).catch(err => console.log('Error al eliminar registro, ', err));
    getData();
  }

  useEffect(()=> {
    getData();
  }, [])

  return (
    <div className="showcase">
      {data}
    </div>
  )
}

export default ShowCase
