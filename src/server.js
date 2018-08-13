const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Mebo = require('mebo');

// because we use promises we need to tell mongoose the default promise library
mongoose.Promise = global.Promise;

// connect to our database
mongoose.connect('mongodb://127.0.0.1:27017/bear', {useNewUrlParser: true});

// creating an express app
const app = express();

// logging requests to the console
app.use(morgan('dev'));

// providing Mebo's restful support under the prefix 'api' to the express app
Mebo.Handler.get('web').restful(app, '/api');

// starting the server
const port = process.env.PORT || 8080; // set our port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!\n`);
});
