var express = require('express')
var controlador = require('../controllers/api')
var router = express.Router();

router.get('/test', controlador.test)

module.exports = router;