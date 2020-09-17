var express = require('express')
var bodyParser = require('body-parser')

var rutas = require('./rutas/api_rutas')
var app = express()

    // Cargar archivos de rutas

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORE


// Rutas
app.use('/api', rutas)
app.use(express.static('./templates'))

// Exportar
module.exports = app