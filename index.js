'use strict'
// Creación de servidor.
// Módulos requeridos.
const express       = require('express'),
      mongoose      = require('mongoose'),
      morgan        = require('morgan'),
      cors          = require('cors'),
      config        = require('./config');

// Base de datos a utilizar.
mongoose.connect(config.db, {
  useNewUrlParser: true,    // Configuraciones en orden de
  useUnifiedTopology: true  // mantener la integridad del proyecto.
}).then(() =>  console.log('Conexion con la base de datos Exitosa'))
  .catch((error) => console.error(`No se ha podido establecer la conexion: ${error}`));

// Puerto y Aplicación.
const app     = express(),
      Routing = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + 'client'));

// HTTP Logger
app.use(morgan('tiny'));
app.use(cors());
app.use('/', Routing);

app.listen(config.port, () => console.log(`Server is running in http://localhost:${config.port}`));