// tests/app.test.mjs
import chai from "chai";
import chaiHttp from "chai-http";
import { app, server } from "../src/index.mjs";

const { expect } = chai;
chai.use(chaiHttp);

describe("API Tests", () => {
  after(() => {
    server.close(); // Close the server after all tests
  });

  it("GET / should return a JSON message", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message", "Docker is easy 🐳");
        done();
      });
  });

  it("GET /user/:id should return a user by ID", (done) => {
    const userId = 123;
    chai
      .request(app)
      .get(`/user/${userId}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("id", userId.toString());
        expect(res.body).to.have.property("name", `User ${userId}`);
        expect(res.body).to.have.property("email", `user${userId}@example.com`);
        done();
      });
  });

  // Add other test cases here...

  it("POST /user should create a new user", (done) => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    chai
      .request(app)
      .post("/user")
      .send(newUser)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("id");
        expect(res.body).to.have.property("name", newUser.name);
        expect(res.body).to.have.property("email", newUser.email);
        done();
      });
  });

  it("POST /user should return a 400 error if name or email is missing", (done) => {
    chai
      .request(app)
      .post("/user")
      .send({ name: "John Doe" })
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(400);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property(
          "error",
          "Name and email are required"
        );
        done();
      });
  });

  it("GET /echo should return the echo message from query", (done) => {
    const message = "Hello, world!";
    chai
      .request(app)
      .get(`/echo?message=${encodeURIComponent(message)}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("echo", message);
        done();
      });
  });

  it("GET /echo should return a default message if no query provided", (done) => {
    chai
      .request(app)
      .get("/echo")
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("echo", "No message provided");
        done();
      });
  });
});