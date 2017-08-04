const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../Server/models/user');
const{ObjectID} = require('mongodb');



// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('59845f33b7ffb686a4cbea38').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({_id: '5984614db7ffb686a4cbea73'}).then((todo) => {
    console.log(todo);
});

