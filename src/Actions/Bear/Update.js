const Mebo = require('mebo');
const BearModel = require('../../Models/Bear');


@Mebo.grant('web', {method: "put", restRoute: "/bears/:id"}) // UPDATE: http://localhost:8080/api/bears/:id)
@Mebo.register('bear.update') // registering action
class Update extends Mebo.Action{
  constructor(){
    super();

    // using a custom input type to handle the mongo's object id.
    // This custom input can be found at '../../Inputs/mongoId.js'
    this.createInput('id: mongoId');

    // input used to specify the new name
    this.createInput('name: string');
  }

  async _perform(data){

    // performing the update
    const bear = await BearModel.findById(data.id);
    bear.name = data.name;
    await bear.save();
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
        message: 'Bear updated!',
      });
    }

    return super._finalize(err, value);
  }
}

module.exports = Update;
