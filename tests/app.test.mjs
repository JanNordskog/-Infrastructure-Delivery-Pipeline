// tests/app.test.mjs
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index.mjs';

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return a JSON message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Docker is easy 🐳');
        done();
      });
  });
});
