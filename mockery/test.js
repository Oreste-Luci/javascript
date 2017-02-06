let assert = require('assert');
let mockery = require('mockery');

function testRealFoo() {
    let foo = require('./Foo');
    let result = foo.message();
    console.log(result);
    assert.equal(result, 'real bar');
}

function testMockFoo() {

    mockery.registerAllowable('./Foo');
    mockery.registerSubstitute('./Bar', './MockBar');
    mockery.enable({useCleanCache: true});

    let foo = require('./Foo');
    let result = foo.message();
    console.log(result);
    assert.equal(result, 'mock bar');

    mockery.disable();
    mockery.deregisterAll();
}


testRealFoo();
testMockFoo();
testRealFoo();