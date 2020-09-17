var express = require('express')
var bodyParser = require('body-parser')

var app = express()
    // Cargar archivos de rutas

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORE


// Rutas


// Exportar
module.exports = app