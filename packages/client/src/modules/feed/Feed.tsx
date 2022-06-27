import { RefreshIcon } from "@heroicons/react/outline";
import TweetBox from "components/tweetbox";

const FeedModule = () => {
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
      <TweetBox />
    </div>
  );
};

export default FeedModule;
