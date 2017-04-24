const Mebo = require('mebo');


/**
 * Registering a new input type specifically to help to deal with mongo's
 * object id which is a 96 bit long hash.
 * https://docs.mongodb.com/manual/reference/method/ObjectId
 *
 * By doing this it makes the code more readable when using it in
 * actions, otherwise the solution would require to
 * use a generic hash input:
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

// Registering a new input type based on the existing hash input that
// is bundled with Mebo (since we are going to just set a default
// value for a property, there is no need for subclassing it)
Mebo.registerInput(Mebo.Ext.Inputs.Hash, 'mongoId');

// Now registering 'size' property as 96 bit long by default
// for the mongoId input
Mebo.registerProperty('mongoId', 'size', 96);
