/**
 * Created by lala on 16.07.2015.
 */
var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.render('index');
});

mongoose.connect('mongodb://localhost/jobfinder');

var con = mongoose.connection;

con.once('open', function() {
    console.log('connected to mongodb successfully!');
});

//app.listen(process.env.PORT, process.env.IP);
app.listen(3000);

