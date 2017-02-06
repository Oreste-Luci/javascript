let Bar = require('./Bar');

class Foo extends Bar {
    message() {
        return this._message();
    }
}

module.exports = new Foo();