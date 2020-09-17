var express = require('express')
var bodyParser = require('body-parser')

var app = express()
    // Cargar archivos de rutas

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORE


// Rutas
app.get('/', (req,res) => {
    res.status(200).send(
        '<h3>Home</h3>'
    );
});

// Exportar
module.exports = app