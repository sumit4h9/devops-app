import request from "supertest";
import app from "./index";

describe("GET /", () => {
  it("should return success message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
