const Mebo = require('mebo');
const BearModel = require('../../Models/Bear');


class Get extends Mebo.Action{
  constructor(){
    super();

    // using a custom input type to handle the mongo id hash.
    // This input implementation can be found at '../../Inputs/mongoId.js'
    this.createInput('id: mongoId');
  }

  _perform(data){
    return BearModel.findById(data.id).select('name');
  }
}

// registering action
Mebo.registerAction(Get, 'bear.get');

// webfying action (GET: http://localhost:8080/api/bears/:id)
Mebo.webfyAction('bear.get', 'get', {restRoute: '/bears/:id'})

module.exports = Get;
