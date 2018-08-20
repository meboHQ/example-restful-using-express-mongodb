const mongoose = require('mongoose');
const Mebo = require('mebo');

// this example uses es6/es7 spec to make things easier to play with.
// In a production environment please consider transpiling beforehand
require('babel-register');

// registering special mongo id input used by the actions
require('./Inputs/MongoId');

// registering actions
require('./Actions');

// loading database
require('./db.js');

// Command-line support:
// node . --cli
if (require.main === module && process.argv.includes('--cli')) {
  const actionName = process.argv[process.argv.indexOf('--cli')];

  // creating a command-line handler which is used to load the command-line
  // arguments to the action, execute the action and to output the result back to the console
  Mebo.Handler.get('cli').init(
    actionName,
    {
      initializedCallback: (value) => {
        mongoose.disconnect();
      }
    });
}

// Web support:
// node .
else {
  // loading server
  require('./server');
}
