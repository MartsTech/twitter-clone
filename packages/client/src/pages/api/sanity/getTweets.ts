import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import type { Tweet } from "types/tweet";
import { getClient } from "utils/sanity/server";

type Data = {
  tweets: Tweet[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const client = getClient(true);
  const tweets: Tweet[] = await client.fetch(tweetQuery);
  res.status(200).json({ tweets });
};

export default handler;

const tweetQuery = groq`
*[_type == 'tweet' && !isBlocked]{
  _type,
  _id,
  _rev,
  _createdAt,
  _updatedAt,
  isBlocked,
  body,
  image,
  user -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    image,
    name,
    email
  } 
} | order(_createdAt desc)`;
