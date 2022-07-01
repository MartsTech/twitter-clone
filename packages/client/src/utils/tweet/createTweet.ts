import type { TweetBody } from "types/tweet";

const createTweet = async (props: TweetBody) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity/createTweet`,
    { method: "POST", body: JSON.stringify(props) }
  );
  const data = await res.json();
  const rev: string | null = data.rev;
  return rev;
};

export default createTweet;
