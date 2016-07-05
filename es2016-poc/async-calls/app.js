var express = require('express');
var app = express();

var controller1 = require('./controllers/controller1');

var port = process.env.PORT || 3300;

controller1(app);

app.listen(port);
