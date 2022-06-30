import type { TweetBody } from "types/tweet";

const createTweet = async (props: TweetBody) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity/createTweet`,
    { body: JSON.stringify(props), method: "POST" }
  );
  const data = await res.json();
  const rev: string | null = data.rev;
  return rev;
};

export default createTweet;
