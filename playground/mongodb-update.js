
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('59796d8ab9bca729386129d1')}, {
        $set: {
        text: 'Eat lunch', 
        completed: true}
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});