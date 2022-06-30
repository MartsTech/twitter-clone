import type { TweetBody } from "types/tweet";

const createTweet = async (props: TweetBody) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity/createTweet`,
    { body: JSON.stringify(props), method: "POST" }
  );
  const data = await res.json();
  const id: string | null = data.id;
  return id;
};

export default createTweet;
