var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

// To Read Environment Variables
var port = process.env.PORT || 3000;

// Middleware. To serve static content from /public directory
app.use('/assets', express.static(__dirname + '/public'));

// Setting view engine
app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});
    
htmlController(app);

apiController(app);

app.listen(port);