// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    body: { username, password },
  } = req;

  if (method === "POST") {
    if (
      username === "terapist" &&
      password === "terapist"
    ) {
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false });
  }
}
