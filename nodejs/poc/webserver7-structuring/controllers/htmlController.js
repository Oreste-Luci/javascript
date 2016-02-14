var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

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
    
}