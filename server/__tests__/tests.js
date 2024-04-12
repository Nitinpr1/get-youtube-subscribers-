const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect; // Importing Mocha's describe, it, and before functions
const server = require("../index");

chai.use(chaiHttp);

before(function (done) {
  // Wait 1 second for the database to connect successfully
  setTimeout(done, 1000);
});

describe("Subscribers API Tests", () => {
  describe("GET /subscribers", () => {
    it("should return all subscribers", async () => {
      // Send GET request to /subscribers
      const res = await chai.request(server).get("/subscribers");
      // Check the response status
      expect(res).to.have.status(200);
      // Check the response body
      expect(res.body).to.be.an("array");
      expect(res.body).to.have.lengthOf.at.least(1);
      expect(res.body[0]).to.have.property("_id").that.is.a("string");
      expect(res.body[0]).to.have.property("name").that.is.a("string");
      expect(res.body[0])
        .to.have.property("subscribedChannel")
        .that.is.a("string");
      expect(res.body[0])
        .to.have.property("subscribedDate")
        .that.is.a("string")
        .and.matches(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
    });
  });

  describe("GET /subscribers/names", () => {
    it("should return subscriber names and channels", async () => {
      // Send GET request to /subscribers/names
      const res = await chai.request(server).get("/subscribers/names");
      // Check the response status
      expect(res).to.have.status(200);
      // Check the response body
      expect(res.body).to.be.an("array");
      expect(res.body).to.have.lengthOf.at.least(1);
      expect(res.body[0]).to.have.property("name").that.is.a("string");
      expect(res.body[0])
        .to.have.property("subscribedChannel")
        .that.is.a("string");
    });
  });

  describe("GET /subscribers/{id}", () => {
    it("should return a single subscriber with Id", async () => {
      // Set the subscriber Id
      const subscriberId = "6618cb767a61200b9271a0c0";
      // Send GET request to /subscribers/{id}
      const res = await chai
        .request(server)
        .get(`/subscribers/${subscriberId}`);
      // Check the response status
      expect(res).to.have.status(200);
      // Check the response body
      expect(res.body).to.be.an("object");
      expect(res.body).to.have.property("_id", subscriberId);
      expect(res.body).to.have.property("name").that.is.a("string");
      expect(res.body)
        .to.have.property("subscribedChannel")
        .that.is.a("string");
      expect(res.body)
        .to.have.property("subscribedDate")
        .that.is.a("string")
        .and.matches(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/);
    });
  });
});
