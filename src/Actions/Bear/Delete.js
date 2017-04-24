const Mebo = require('mebo');
const BearModel = require('../../Models/Bear');


class Delete extends Mebo.Action{
  constructor(){
    super();

    // using a custom input type to handle the mongo id hash.
    // This input implementation can be found at '../../Inputs/mongoId.js'
    this.createInput('id: mongoId');
  }

  async _perform(data){

    // deleting bear
    await BearModel.remove({
      _id: data.id
    });

    // defining a custom result that only affects the web handler, otherwise
    // if not defined the returning value of _perform is used instead.
    this.setMetadata('$webResult', {
      message: 'Successfully deleted!',
    });
  }
}

// registering action
Mebo.registerAction(Delete, 'bear.delete');

// webfying action (DELETE: http://localhost:8080/api/bears/:id)
Mebo.webfyAction('bear.delete', 'delete', {restRoute: '/bears/:id'})

module.exports = Delete;
