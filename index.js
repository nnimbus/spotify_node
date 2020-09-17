const mongoose = require('mongoose');
const app = require('./app')
const port = 3700
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Conexion establecida con mongodb');
    app.listen(port, () => {
        console.log('Servidor corriendo en el port 3700')
    })
})