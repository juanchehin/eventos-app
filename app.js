const express = require('express');
const app = express();

const eventosController = require('./controllers/eventosController');

// Indico el lugar de los archivos estaticos
app.use(express.static('public'));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/eventos.html');
    return;
});

app.post('/login', (req, res) => {
    res.render('public/login');
    return;
});

app.post('/', (req, res) => {
    console.log('Aqui creas tu evento!');
});


app.listen((3000), () => {
    console.log('Corriendo en puerto 3000');
});