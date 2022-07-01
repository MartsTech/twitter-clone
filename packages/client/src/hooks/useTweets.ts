import { useState } from "react";
import toast from "react-hot-toast";
import type { Tweet } from "types/tweet";
import fetchTweets from "utils/tweet/fetchTweets";

const useTweets = (tweetsData: Tweet[]) => {
  const [tweets, setTweets] = useState(tweetsData);

  const refresh = async (notification: boolean = true) => {
    let refreshToast;

    if (notification) {
      refreshToast = toast.loading("Refreshing...");
    }

    const data = await fetchTweets();
    setTweets(data);

    if (notification) {
      toast.success("Refreshed!", {
        id: refreshToast,
      });
    }
  };

  return [tweets, refresh] as const;
};

export default useTweets;
