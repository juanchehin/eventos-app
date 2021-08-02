const express = require('express');
const router = express.Router();

// Importa los controladores
const twitterController = require('../controllers/twitterController');
const authController = require('../controllers/authController.js');
const eventosController = require('../controllers/eventosController.js');

// Ruta principal - login
router.post('/login',
    authController.login
);

// Ruta logout
// router.get('/logout',
//     authController.cerrarSesion
// );


// ======================================
//  Eventos
// ======================================

// Listado de eventos
router.get('/',
    eventosController.listarEventos
);

// Detalles del evento idevento
router.get('/evento/:IdEvento',
    eventosController.detalleEvento
);

// Eventos destacados
// router.get('/eventos-destacados',
//     eventosController.eventosDestacados
// );

// Crear evento
router.post('/crear-evento',
    eventosController.crearEvento
);

// ======================================
//  Twitter
// ======================================

router.post('/twitter/newtweet',
    twitterController.publicar
);

module.exports = router;