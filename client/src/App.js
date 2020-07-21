import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './components/main';
import Loader from './components/loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      axios
        .get('http://localhost:8080/')
        .then(res => {
          console.log(res.message, res.status);
          setLoading(true);
        })
        .catch(err => console.log('Error al cargar informacion.', err));
    }
  }, [loading]);

  return <div className="App">{loading ? <Main /> : <Loader />}</div>;
}

export default App;
