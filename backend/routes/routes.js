const express = require('express');
const app = express();

app.use(require('./usuario'));
app.use(require('./login'));
app.use(require('./profile'));
app.use(require('./upload'));
app.use(require('./imagen'));
app.use(require('./receta'));



module.exports = app;