import { NextApiRequest, NextApiResponse } from "next";
import { runMiddleware, cors } from "../../lib/cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  const { method } = req;
  if (method === "POST") {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
      return res
        .status(412)
        .end(`Parameters firstName and lastName are required parameters!`);
    }

    res.status(200).json({
      payload: {
        firstName: firstName.toUpperCase(),
        lastName: lastName.toUpperCase(),
      },
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
