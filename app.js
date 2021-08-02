const express = require('express');
const app = express();
const passport = require('./config/passport');
const session = require('express-session');
const index = require('./routes/index.js');

// Crear la conexion a la BD
const db = require('./config/database.js');

db.sync()
    .then(() => console.log('Conectado al Servidor MySQL'))
    .catch(error => console.log(error));

// Para usar el cuerpo de la peticion (body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ************* PASSPORT *************
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());
// ************* FIN PASSPORT *************

// Archivo de las rutas
app.use('/', index);

// Servidor y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log('El servidor esta funcionando');
});