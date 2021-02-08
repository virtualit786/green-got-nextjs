import { NextApiRequest, NextApiResponse } from "next";
import { runMiddleware, cors } from "../../../lib/cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("greetings index.ts handler called ");
  await runMiddleware(req, res, cors);

  res.status(404).end(`Not found`);
};

export default handler;
