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
  }

  _finalize(err, value){
    // defining a custom result that only affects the web handler
    // this call could be done inside of the _perform method. However, we
    // are defining it inside of the _finalize to keep _perform as
    // abstract as possible. Since, _finalize is always called (even during
    // an error) after the execution of the action, it provides a way to
    // hook and define custom metadata related with the result.
    if (!err){
      this.setMeta('$webResult', {
        message: 'Successfully deleted!',
      });
    }

    return super._finalize(err, value);
  }
}

module.exports = Delete;
