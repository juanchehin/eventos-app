// Crear la conexion a la BD desde app..js
const db = require('../config/database.js');
const eventos = require('../models/eventos.js');

exports.listarEventos = (req, res, next) => {
    eventos.findAll().then(eventos => {
        console.log("All events:", JSON.stringify(eventos, null, 4));
        res.json(eventos);
    });
};

exports.login = (req, res, next) => {
    console.log('Entra login');
};

exports.crearEvento = (req, res, next) => {
    console.log('Entra login');
};

exports.compartirTwitter = (req, res, next) => {
    console.log('Entra login');
};

exports.db = db;