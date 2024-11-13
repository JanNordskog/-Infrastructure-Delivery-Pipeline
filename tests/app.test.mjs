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

describe('GET /user/:id', () => {
  it('should return a user by ID', (done) => {
    const userId = 123;
    chai.request(app)
      .get(`/user/${userId}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', userId.toString());
        expect(res.body).to.have.property('name', `User ${userId}`);
        expect(res.body).to.have.property('email', `user${userId}@example.com`);
        done();
      });
  });
});

describe('POST /user', () => {
  it('should create a new user', (done) => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };
    chai.request(app)
      .post('/user')
      .send(newUser)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name', newUser.name);
        expect(res.body).to.have.property('email', newUser.email);
        done();
      });
  });

  it('should return a 400 error if name or email is missing', (done) => {
    chai.request(app)
      .post('/user')
      .send({ name: 'John Doe' }) // Missing email
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error', 'Name and email are required');
        done();
      });
  });
});

describe('GET /echo', () => {
  it('should return the echo message from query', (done) => {
    const message = 'Hello, world!';
    chai.request(app)
      .get(`/echo?message=${encodeURIComponent(message)}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('echo', message);
        done();
      });
  });

  it('should return a default message if no query provided', (done) => {
    chai.request(app)
      .get('/echo')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('echo', 'No message provided');
        done();
      });
  });
});
