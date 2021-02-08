import http from "http";
import { apiResolver } from "next/dist/next-server/server/api-utils";
import handler from "../../pages/api/create_user";
import listen from "test-listen";
import axios from "axios";

const HOST_URL = "https://green-got-nextjs.vercel.app";

describe("create_user should return a payload with new user ", () => {
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
    const input = {
      firstName: "farooq",
      lastName: "hameed",
    };
    const out = {
      payload: {
        firstName: "FAROOQ",
        lastName: "HAMEED",
      },
    };

    const response = await axios.post(`${HOST_URL}/api/create_user`, input);
    const jsonResult = await response.data;

    expect(response.status).toBe(200);
    expect(jsonResult).toMatchObject(out);
  });
});
