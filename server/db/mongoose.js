var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/TodoApp', {useMongoClient: true});
module.exports = {mongoose};