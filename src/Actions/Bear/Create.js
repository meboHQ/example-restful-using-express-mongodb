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

    return result._id;
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
        'message': 'Bear created!'
      });
    }

    return super._finalize(err, value);
  }
}

module.exports = Create;
