let RequestPromise = require('request-promise');

function callHttp(url) {

  return new Promise( (resolve, reject) => {

      RequestPromise(url)
          .then(function (htmlString) {
              resolve(htmlString);
          })
          .catch(function (err) {
              console.log(err);
          });
  });
}

let output = "init";

callHttp('http://www.google.com').then( (msg) => {
  output = msg;
}).then( (msg2) => {
  console.log(msg2);
});

console.log(output);
