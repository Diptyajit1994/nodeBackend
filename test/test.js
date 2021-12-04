const { request, expect } = require("./config");

describe("Check server status", function () {
  it("returns all server status", async function () {
    const response = await request.get("/");

    expect(response.status).to.eql(200);
  });
});