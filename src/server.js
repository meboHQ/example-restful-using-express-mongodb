const express = require('express');
const morgan = require('morgan');
const Mebo = require('mebo');

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
