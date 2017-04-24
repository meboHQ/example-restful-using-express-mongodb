// this example uses es6/es7 spec to make things easier to play with.
// In a production environment please consider transpiling beforehand
require('babel-register');

// registering the special mongo id input used by the actions
require('./Inputs/mongoId');

// registering actions
require('./Actions');

// loading server
require('./server');
