
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});