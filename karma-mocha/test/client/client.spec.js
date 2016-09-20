let chai = require('chai');
let expect = require('chai').expect;
chai.use(sinonChai);

describe('Client', () => {

    it('test', () => {
        expect('hello world').to.equal('hello world');
    });

});
