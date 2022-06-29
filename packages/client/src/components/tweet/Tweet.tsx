import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import Avatar from "components/avatar";
import type { FC } from "react";
import type { Tweet as TweetType } from "types/tweet";
import TweetHeader from "./components/Header";
import TweetIcon from "./components/Icon";
import TweetImage from "./components/Image";

interface Props {
  tweet: TweetType;
}

const Tweet: FC<Props> = ({ tweet }) => {
  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3 ">
        <Avatar data-testid="avatar" src={tweet.user.image} />
        <div className="align-center flex flex-1 flex-col">
          <TweetHeader
            data-testid="header"
            name={tweet.user.name}
            createdAt={tweet["_createdAt"]}
          />
          <p data-testid="body" className="pt-1">
            {tweet.body}
          </p>
          {tweet.image && (
            <TweetImage data-testid="image" image={tweet.image} />
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <TweetIcon data-testid="commentIcon" Icon={ChatAlt2Icon} count={5} />
        <TweetIcon Icon={SwitchHorizontalIcon} />
        <TweetIcon Icon={HeartIcon} />
        <TweetIcon Icon={UploadIcon} />
      </div>
    </div>
  );
};

export default Tweet;
