"use strict";

let http = require('http');
let express = require('express');

let app = express();
let SERVER = 'http://localhost:3000';

// To Read Environment Variables
let port = process.env.PORT || 3000;

app.get('/hello', function(req, res) {
    res.send('<html><head><title>Recursive Promise</title></head><body><h1>Recursive Promise!</h1></body></html>'); 
});

app.get('/linkA1', function(req, res) {
    console.log('/linkA1 reached');
    res.statusCode = 302;
    res.header('Location', SERVER + '/linkA2');
    res.end(); 
});

app.get('/linkA2', function(req, res) {
    console.log('/linkA2 reached');
    res.statusCode = 302;
    res.header('Location', SERVER + '/linkA3');
    res.end(); 
});

app.get('/linkA3', function(req, res) {
    console.log('/linkA3 reached');
    res.statusCode = 302;
    res.header('Location', SERVER + '/finalA');
    res.end(); 
});

app.get('/finalA', function(req, res) {
    console.log('/finalA reached');
    res.end('<html><head><title>Recursive Promise</title></head><body><h1>Final Page!</h1></body></html>'); 
});

app.get('/follow', function(req, res) {

    console.log('/follow reached');

    let startUrl = '/linkA1';
    let start = parseInt(req.query.start) || 1;

    if (start === 2) {
        startUrl = '/linkA2';
    } else if (start === 3) {
        startUrl = '/linkA3';
    } else if (start === 4) {
        startUrl = '/finalA';
    }

    getRedirectURLs(SERVER + startUrl,0).then((redirectsObject) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(redirectsObject));
    });     
});

let getRedirectURLs = (url,redirectCount,redirectsObject) => {

    redirectCount = redirectCount || 0;
    redirectsObject = redirectsObject || [];

    if (redirectCount > 10) {
        throw new Error("Redirected too many times.");
    }

    return new Promise((resolve,reject) => {

        http.get(url, (response) => {

            let responseObject = {
                url: '',
                status_code: 0,
                redirect: '',
                body: ''
            };

            responseObject.url = url;

            var body = '';
            response.on('data', function(d) {
                body += d;                
            });

            response.on('end', () => {

                let statusCode = response.statusCode;
                let redirectLocation = response.headers['location'];

                responseObject.body = body;
                responseObject.redirect = redirectLocation;
                responseObject.status_code = statusCode;

                resolve(responseObject);
            });

            response.on('error', (error) => {
                console.log('\n Error received: ' + error);
                reject(error);
            });
            
        });
        
    }).then((responseObject) => {
        
        redirectsObject.push(responseObject);

        return responseObject.redirect 
            ? getRedirectURLs(responseObject.redirect, redirectCount + 1, redirectsObject) 
            : new Promise((resolve,reject) => {
                resolve(redirectsObject);
            });;
    });
};

app.listen(port);