const Mebo = require('mebo');
const BearModel = require('../../Models/Bear');

@Mebo.grant('cli')
@Mebo.grant('web', {method: "get", restRoute: "/bears/:id"}) // GET: http://localhost:8080/api/bears/:id)
@Mebo.register('bear.get') // registering action
class Get extends Mebo.Action{
  constructor(){
    super();

    // using a custom input type to handle the mongo's object id.
    // This custom input can be found at '../../Inputs/mongoId.js'
    this.createInput('id: mongoId', {'elementType': 'argument'});
  }

  _perform(data){
    return BearModel.findById(data.id).select('name');
  }
}

module.exports = Get;
