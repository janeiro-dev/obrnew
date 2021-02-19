require('./config');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//usar morgan
app.use(morgan('tiny'));
app.use(cors());


//el path es para arreglar la ruta
app.use(express.static(path.resolve(__dirname, '../public')));

//configuracion global de rutas
app.use(require('./routes/routes'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos Online');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', process.env.PORT);
});