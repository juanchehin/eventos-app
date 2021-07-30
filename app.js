const express = require('express');
const app = express();

import eventosController from './controller/eventosController';

app.get('/', (req, res) => {
    eventosController.listarEventos();
});

app.post('/login', (req, res) => {
    eventosController.login();
})

app.post('/', (req, res) => {
    console.log('Aqui creas tu evento!');
})


app.listen((3000), () => {
    console.log('Corriendo en puerto 3000');
});