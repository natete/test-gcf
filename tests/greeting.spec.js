const {greeting} = require('../index');
const {mockReq, mockRes} = require('sinon-express-mock');
const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('rate Image', () => {

    let req;

    beforeEach(() => {
        req = mockReq();
    });

    it('should fail if no body', () => {
        const res = mockRes();
        greeting(req, res);

        expect(res.status).to.be.calledWith(400);
        expect(res.send).to.be.calledWith('Bad request');
    });

    it('should return greeting', () => {
        req.body = {name: 'John'};
        const res = mockRes();

        greeting(req, res);

        expect(res.send).to.be.calledWith({greeting: 'Hello John'});
    });
});
