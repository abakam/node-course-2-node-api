var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js')

const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(201).send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    var todos = Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(404).send(err);
    });
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = {app};