import type { Tweet } from "types/tweet";

const fetchTweets = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity/getTweets`
  );
  const data = await res.json();
  const tweets: Tweet[] = data.tweets;
  return tweets;
};

export default fetchTweets;
