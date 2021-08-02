const Sequelize = require('sequelize');
const db = require('../config/database.js');

const Eventos = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    lista_fechas: Sequelize.DATE,
    lugar: Sequelize.STRING,
    destacado: Sequelize.BOOLEAN,
    imagen: Sequelize.STRING, // URL de la imagen
});

// Métodos personalizados
// User.prototype.verificarPassword = function(password) {
//     // return bcrypt.compareSync(password, this.password);
//     console.log('pass es : ', password);
//     return password == this.password;
// }

module.exports = Eventos;