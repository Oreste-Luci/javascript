# Mocha Test Framework POC

## Some mocha commands

To run mocha tests from `test` folder:

````
$ node_modules/.bin/mocha
````

To execute a mocha test file:

````
$ node_modules/.bin/mocha test/index.spec.js
````

To display available reporters:

````
$ node_modules/.bin/mocha --reporters
````

To run using a particular reporter:

````
$ node_modules/.bin/mocha --reporter progress
````

> Note: If `mocha` is installed globally you don't need to specify the path `node_modules/.bin/`.

> To install globally `npm install -g mocha`.

## Runing the tests

To run code tests:

````
$ npm run codetest
````

To run test coverage:

````
$ npm run covertest
````

To run all tests:

````
$ npm run test
````
