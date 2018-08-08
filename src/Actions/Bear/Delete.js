const Mebo = require('mebo');
const BearModel = require('../../Models/Bear');

@Mebo.grant('web', {method: "delete", restRoute: "/bears/:id"}) // DELETE: http://localhost:8080/api/bears/:id)
@Mebo.register('bear.delete') // registering action
class Delete extends Mebo.Action{
  constructor(){
    super();

    // using a custom input type to handle the mongo's object id.
    // This custom input can be found at '../../Inputs/mongoId.js'
    this.createInput('id: mongoId');
  }

  async _perform(data){

    // deleting bear
    await BearModel.remove({
      _id: data.id
    });

    // defining a custom result that only affects the web handler, otherwise
    // if not defined the returning value of _perform is used instead.
    this.setMeta('$webResult', {
      message: 'Successfully deleted!',
    });
  }
}

module.exports = Delete;
