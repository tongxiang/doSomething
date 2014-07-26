var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doSomething');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var User;
var Schema = mongoose.Schema;

var userSchema = new Schema({
  uid: Number,
  stage: Number //begins at 1
});

User = mongoose.model('User', userSchema);

module.exports = {'User': User};