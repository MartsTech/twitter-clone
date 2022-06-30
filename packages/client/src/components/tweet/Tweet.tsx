import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import Avatar from "components/avatar";
import useTweetComments from "hooks/useTweetComments";
import type { FC } from "react";
import type { Tweet as TweetType } from "types/tweet";
import { urlFor } from "utils/sanity";
import TweetComments from "./components/Comments";
import TweetHeader from "./components/Header";
import TweetIcon from "./components/Icon";
import TweetImage from "./components/Image";

interface Props {
  tweet: TweetType;
}

const Tweet: FC<Props> = ({ tweet }) => {
  const [comments] = useTweetComments(tweet["_id"]);

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
            <TweetImage data-testid="image" src={urlFor(tweet.image).url()} />
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <TweetIcon
          data-testid="commentIcon"
          Icon={ChatAlt2Icon}
          count={comments.length}
        />
        <TweetIcon Icon={SwitchHorizontalIcon} />
        <TweetIcon Icon={HeartIcon} />
        <TweetIcon Icon={UploadIcon} />
      </div>
      {comments.length > 0 && <TweetComments comments={comments} />}
    </div>
  );
};

export default Tweet;
