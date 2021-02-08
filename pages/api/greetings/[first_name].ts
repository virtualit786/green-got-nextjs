import { NextApiRequest, NextApiResponse } from "next";
import { runMiddleware, cors } from "../../../lib/cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  const {
    method,
    query: { first_name },
  } = req;
  console.log("first_name handler called ");
  if (method === "GET") {
    if (!first_name) {
      return res.status(412).end(`Missing parameter ${first_name}`);
    }
    res.status(200).json({
      payload: `Hello ${first_name}!`,
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
