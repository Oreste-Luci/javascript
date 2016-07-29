let express = require('express');
let syncRequest = require('sync-request');

let app = express();

// To Read Environment Variables
let port = process.env.PORT || 3000;

let syncPromise = () => {
  return new Promise( (resolve) => {
      syncCall();
      resolve();
  });
};

let syncCall = () => {
    let res = syncRequest('GET','http://www.example.com')
    console.log('Downloaded ' + res.getBody().length + ' bytes');
};

app.get('/async', (request, response) => {
    let time = request.params.time;
    syncPromise().then( () => {
        response.send('Finished Async Request');
    });
});

app.get('/sync', (request, response) => {
    let time = request.params.time;
    syncCall();
    response.send('Finished Sync Request');    
});

console.log('Server Started.');

app.listen(port);
