const { request, expect } = require("./config");
const patientInfo = require('../inputFile/patientInfo.json');

describe("Check server status", function () {
  it("returns all server status", async function () {
    const response = await request.get("/");

    expect(response.status).to.eql(200);
  });
});

describe("Get /api/all-patient-info", function () {
    it("returns all patient bmi data using get call", async function () {
      const response = await request.get("/api/all-patient-info");
  
      expect(response.status).to.eql(200);
      expect(response.body).to.include({"success": true});
      expect(response.body.data).to.include.keys("patientBMIData", "overweightCount",);
      expect(response.body.data.patientBMIData).to.be.an("array");
    });
});

describe("POST /api/calculate-patient_BMI-infoe", function () {
    it("calculates the distance between two airports", async function () {
      const response = await request
        .post("/api/calculate-patient_BMI-info")
        .send(patientInfo);
  
      expect(response.status).to.eql(200);
      expect(response.body).to.include({"success": true});
      expect(response.body.data).to.include.keys("patientBMIData", "overweightCount");
      expect(response.body.data.patientBMIData).to.be.an("array");
    });
  });