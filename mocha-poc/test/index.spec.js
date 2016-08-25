let chai = require('chai');
let expect = require('chai').expect;
let word = require('../index');
let sinon = require('sinon');
let sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('Sanitize', () => {

    before(() => {
        console.log('before once!');
    });

    beforeEach(() => {
        console.log('before each!');
    });

    after(() => {
        console.log('after once!');
    });

    afterEach(() => {
        console.log('after each!');
    });

    it.skip('skip this test', () => {
        console.log('You should not see this message');
    });

    //    it.only('only run this test', () => {
    //        console.log('You only see this message');
    //    });

    it('returns lowercase of a string', () => {

        let inputWord = 'HELLO WORLD';
        let outputWord = word.sanitize(inputWord);

        expect(outputWord).to.equal('hello world');
        expect(outputWord).to.not.equal('HELLO WORLD');
        expect(outputWord).to.be.a('string');
        expect(outputWord).to.not.be.a('number');
        expect(outputWord).to.contain('hello');
    });

    it('remove any hyphen', () => {

        let inputWord = 'HELLO-WORLD';
        let outputWord = word.sanitize(inputWord);

        expect(outputWord).to.equal('hello world');
    });
});

describe('Tokenize', () => {

    it('returns an array of words', () => {

        let sentence = 'hello world';
        let tokenizedSentence = word.tokenize(sentence);

        expect(tokenizedSentence).to.include.members(['hello', 'world']);
        expect(tokenizedSentence).to.have.lengthOf(2);
    });

});

describe('Github info', () => {

    it('returns repo info from github', (done) => {
        word.info((reply) => {
            expect(reply.name).to.equal('netflix-oss-example');
            expect(reply.owner.login).to.equal('Oreste-Luci');
            done();
        });
    });

});

describe('Info Language', () => {

    /*
        Stubbing GitHub call with Sinon
    */
    it('returns language info of the repo', (done) => {

        let githubResponse = {
            'language': 'Assembly'
        };

        let stub = sinon.stub().callsArgWith(0, githubResponse);

        word.infoLang(stub, (reply) => {
            expect(reply).to.equal('Language is Assembly');
            done();
        });
    });

});