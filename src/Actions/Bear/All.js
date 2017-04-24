const Mebo = require('mebo');
const BearModel = require('../../Models/Bear');


class All extends Mebo.Action{
  constructor(){
    super();

    // adding an optional input to control the limit. You can
    // play with it by specifying it through the querystring:
    // http://localhost:8080/api/bears?limit=2
    this.createInput('limit?: numeric')
  }
  _perform(data){
    return BearModel.find().select('name').limit(data.limit);
  }
}

// registering action
Mebo.registerAction(All, 'bear.all');

// webfying action (GET: http://localhost:8080/api/bears)
Mebo.webfyAction('bear.all', 'get', {restRoute: '/bears'})

module.exports = All;
