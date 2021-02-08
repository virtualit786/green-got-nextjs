// import * as pageDetailsService from "../../../src/services/PageDetailsService";
import http from "http";
import { apiResolver } from "next/dist/next-server/server/api-utils";
import handler from "../../pages/api/create_user";
import listen from "test-listen";
import axios from "axios";

// // import app from "../app";

// test("It adds two numbers", () => {
//   expect(1 + 1).toBe(2);
// });

describe("creatgrettings should return a payload with capitalized name ", () => {
  let server;
  let url;

  beforeAll(async (done) => {
    server = http.createServer((req, res) =>
      apiResolver(req, res, undefined, handler, undefined, false)
    );
    url = await listen(server);
    done();
  });

  afterAll((done) => {
    server.close(done);
  });

  test("Should return 200 informing internet status if OK", async () => {
    const input = "farooq";

    const out = {
      payload: `Hello ${input}!`,
    };

    const response = await axios.get(
      `http://localhost:3000/api/greetings/${input}`
    );
    const jsonResult = await response.data;

    expect(response.status).toBe(200);
    expect(jsonResult).toMatchObject(out);
  });
});
