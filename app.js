var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = 'mongodb://localhost/osi';
var port = 8585;

mongoose.connect(db);

var users = require('./routes/users');
var books = require('./routes/books');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req, res){
    res.send('Okay...!');
    console.log('server started...!')
})


app.listen(port);
app.use('/users',users);
app.use('/books',books);

module.exports = app;