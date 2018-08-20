const mongoose = require('mongoose');

// because we use promises we need to tell mongoose the default promise library
mongoose.Promise = global.Promise;

// connect to our database
mongoose.connect('mongodb://127.0.0.1:27017/bear', {useNewUrlParser: true});
