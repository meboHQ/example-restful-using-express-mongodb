const Mebo = require('mebo');


/**
 * Registering a new input type specifically to help to deal with mongo's
 * object id which is a 96 bit long hash.
 * https://docs.mongodb.com/manual/reference/method/ObjectId
 *
 * By doing this it makes the code more readable when using it in
 * actions, otherwise it would require to use a generic hash input:
 *
 * ...
 * // using custom input for mongo's object id
 * this.createInput('id: mongoId')
 * ...
 *
 * vs
 * ...
 * // using a generic hash input
 * this.createInput('id: hash', {size: 96})
 * ...
 */
@Mebo.property('size', 96)
@Mebo.register('mongoId')
class MongoId extends Mebo.Inputs.Hash{}

