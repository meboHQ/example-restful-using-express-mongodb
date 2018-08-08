const Mebo = require('mebo');
const BearModel = require('../../Models/Bear');

@Mebo.grant('web', {method: "post", restRoute: "/bears"}) // POST: http://localhost:8080/api/bears
@Mebo.register('bear.create') // registering action
class Create extends Mebo.Action{
  constructor(){
    super();

    this.createInput('name: string');
  }

  async _perform(data){
    const bear = BearModel(); // create a new instance of the Bear model
    bear.name = data.name; // set the bears name

    // storing bear
    const result = await bear.save();

    // defining a custom result that only affects the web handler, otherwise
    // if not defined the returning value of _perform is used instead.
    this.setMeta('$webResult', {
      'message': 'Bear created!'
    });

    return result._id;
  }
}

module.exports = Create;
