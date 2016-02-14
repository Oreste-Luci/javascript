module.exports = function(app) {
    
    app.get('/api/person/:id', function(req, res) {
        // Get data from the database
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
    });

    app.post('/api/person', function(req, res) {
        // Save to the DB
    });

    app.delete('/api/person/:id', function(req, res) {
        // Delete form database
    });
}