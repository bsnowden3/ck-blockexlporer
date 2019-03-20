const express = require('express');
const bodyParser = require('body-parser');

const blockRoute = require('./routes/block');
const txRoute = require('./routes/tx');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
});

app.use('/api/block/', blockRoute);
app.use('/api/tx/', txRoute);

module.exports = app;
