var express = require('express');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');

var app = express();

//serve client files
app.use(express.static(__dirname+ '/public'));

//parse JSON posts
app.use(bodyParser.json());

var sessionlist = [];
var file = __dirname+'/../data/sessions.json';

jsonfile.readFile(file, function(err, obj) {
    if(!err) sessionlist = obj;
    console.error(err);
});

//serve api
app.get('/api/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/sessions', function (req, res) {
    res.json(sessionlist);
});

app.post('/api/sessions', function (req, res) {
    if(!req.body.message){
        res.json({error: "invalid push"});
    } else {
        sessionlist.unshift(req.body.message);
        res.json(sessionlist);
        jsonfile.writeFile(file, sessionlist, function (err) {
            console.error(err);
        });
    }
});


//run server
app.listen(90, function () {
    console.log('App listening on port 90!');
});


//question
//ideas
