var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// To Read Environment Variables
var port = process.env.PORT || 3000;

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json()

// Middleware. To serve static content from /public directory
app.use('/assets', express.static(__dirname + '/public'));

// Setting view engine
app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

// Mapping to URLs (express functionality)
app.get('/', function(req, res) {
   res.send('<html><head><link href=/assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello World!</h1></body></html>'); 
});

// Using template engine
app.get('/index.html', function(req, res) {
   res.render('index'); 
});

// Passing Parameters
app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr }); // For query parameter ?qstr=123
    //res.send('<html><head><link href=/assets/style.css type=text/css rel=stylesheet/></head><body><h1>Person: ' + req.params.id + '</h1></body></html>'); 
});

// POST /person gets urlencoded bodies. /index.html has the form 
app.post('/person', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send('Thank You!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

// POST /personjson gets jsonParser bodies. /index.html has the json data in jquery 
app.post('/personjson', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send('Thank You For The JSON Data!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.get('/api', function(req,res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);