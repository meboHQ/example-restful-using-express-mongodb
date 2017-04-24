const Mebo = require('mebo');
const BearModel = require('../../Models/Bear');


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

    // defining a custom result that only affects the web handler, otherwise
    // if not defined the returning value of _perform is used instead.
    this.setMetadata('$webResult', {
      message: 'Bear updated!',
    })
  }
}

// registering action
Mebo.registerAction(Update, 'bear.update');

// webfying action (PUT: http://localhost:8080/api/bears/:id)
Mebo.webfyAction('bear.update', 'put', {restRoute: '/bears/:id'})

module.exports = Update;
