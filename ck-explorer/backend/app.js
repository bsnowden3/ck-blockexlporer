const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path');

const blocksRoute = require('./routes/blocks');
const txsRoute = require('./routes/txs');

const app = express();

const dbName = 'mongodb://localhost/mean-app';

mongoose.connect(dbName, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
});

app.use('/api/blocks/', blocksRoute);
app.use('/api/txs/', txsRoute);

module.exports = app;
