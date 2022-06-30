import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import type { TweetBody } from "types/tweet";
import { apiEndpoint } from "utils/sanity/config";

interface Data {
  id: string | null;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token || !token.sub) {
    res.status(401).json({ id: null });
    return;
  }

  const data: TweetBody = JSON.parse(req.body);

  if (typeof data.body !== "string" || data.body.length === 0) {
    res.status(400).json({ id: null });
    return;
  }

  const mutations = [
    {
      create: {
        _type: "tweet",
        isBlocked: false,
        body: data.body,
        user: {
          _type: "reference",
          _ref: token.sub,
        },
      },
    },
  ];

  const result = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  });

  const json = await result.json();

  res.status(201).json({ id: json.transactionId });
};

export default handler;
