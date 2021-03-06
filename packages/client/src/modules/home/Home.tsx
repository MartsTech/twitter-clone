import { RefreshIcon } from "@heroicons/react/outline";
import Tweet from "components/tweet";
import TweetBox from "components/tweetbox";
import useTweets from "hooks/useTweets";
import type { FC } from "react";
import type { Tweet as TweetType } from "types/tweet";

interface Props {
  tweets: TweetType[];
}

const HomeModule: FC<Props> = ({ tweets: tweetsData }) => {
  const [tweets, refresh] = useTweets(tweetsData);

  return (
    <div className="max-h-screen overflow-scroll border-x scrollbar-hide">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={() => refresh()}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-primary
          transition-all duration-500 ease-out hover:rotate-180
          active:scale-125"
        />
      </div>
      <TweetBox onTweet={() => refresh(false)} />
      {tweets.map((tweet) => (
        <Tweet key={tweet["_id"]} tweet={tweet} />
      ))}
    </div>
  );
};

export default HomeModule;
