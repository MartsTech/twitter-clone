import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import type { Comment } from "types/comment";
import { getClient } from "utils/sanity/server";

type Data = {
  comments: Comment[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { tweetId } = req.query;

  if (typeof tweetId !== "string" || tweetId.length === 0) {
    res.status(400).json({ comments: [] });
    return;
  }

  const client = getClient(true);
  const comments: Comment[] = await client.fetch(commentsByIdQuery, {
    tweetId,
  });

  res.status(200).json({ comments });
};

export default handler;

const commentsByIdQuery = groq`
*[_type == 'comment' && references(*[_type == "tweet" && _id == $tweetId]._id)]{
  _type,
  _id,
  _rev,
  _createdAt,
  _updatedAt,
  body,
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
