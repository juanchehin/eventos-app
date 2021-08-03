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

exports.crearEvento = async(req, res, next) => {
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const lista_fechas = req.body.lista_fechas;
    const lugar = req.body.lugar;
    const destacado = req.body.destacado;
    const imagen = req.body.imagen;

    try {
        // Create a new evento
        const respuesta = await eventos.create({
            titulo: titulo,
            descripcion: descripcion,
            lista_fechas: lista_fechas,
            lugar: lugar,
            destacado: destacado,
            imagen: imagen
        });
        res.json({ mensaje: 'ok' });
    } catch {
        res.json({ mensaje: 'algo salio mal' });

    }

};


exports.detalleEvento = async(req, res) => {

    const pIdEvento = req.params.IdEvento;

    try {
        const respuesta = await eventos.findAll({
            where: {
                IdEvento: pIdEvento
            }
        });
        res.json(respuesta);
    } catch {
        res.json({ mensaje: 'Algo salio mal' });

    }

};


exports.eventosDestacados = async(req, res) => {

    try {
        const respuesta = await eventos.findAll({
            where: {
                destacado: true
            }
        });
        res.json(respuesta);
    } catch {
        res.json({ mensaje: 'Algo salio mal' });

    }

};


exports.db = db;