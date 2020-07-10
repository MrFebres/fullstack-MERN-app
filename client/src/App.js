import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Main from "./components/main";
import Loader from "./components/loader";
import './App.css';

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(()=> {
    if (loader === false) {
      axios.get('http://localhost:8080/').then(res => console.log('Información cargada correctamente', res.status))
      .catch(err => console.log('Error al cargar informacion.', err))
      setTimeout(() => {
        setLoader(true);
      }, 1500)
    }
  }, [loader])

  return (
    <div className="App">
      {
        loader === false ? <Loader /> : <Main />
      }
    </div>
  );
}

export default App;
