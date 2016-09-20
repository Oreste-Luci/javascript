let poc1 = require('../../src/server/poc1');
let expect = require('chai').expect;

describe('poc1', () => {

    it('returns hello', () => {

        let string = poc1();

        expect(string).to.equal('Hello World');
    });

});
