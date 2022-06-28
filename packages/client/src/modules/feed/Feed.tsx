import { RefreshIcon } from "@heroicons/react/outline";
import Tweet from "components/tweet";
import TweetBox from "components/tweetbox";
import type { FC } from "react";
import type { Tweet as TweetType } from "types/tweet";

interface Props {
  tweets: TweetType[];
}

const FeedModule: FC<Props> = ({ tweets }) => {
  return (
    <div className="border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-primary
          transition-all duration-500 ease-out hover:rotate-180
          active:scale-125"
        />
      </div>
      <div className="">
        <TweetBox />
      </div>
      <div className="">
        {tweets.map((tweet) => (
          <Tweet key={tweet["_id"]} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default FeedModule;
