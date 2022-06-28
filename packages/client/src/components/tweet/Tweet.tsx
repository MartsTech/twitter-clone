import Image from "next/image";
import type { FC } from "react";
import type { Tweet as TweetType } from "types/tweet";
import { urlFor } from "utils/sanity";
import TimeAgo from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import TweetIcon from "./components/Icon";

interface Props {
  tweet: TweetType;
}

const Tweet: FC<Props> = ({ tweet }) => {
  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3 ">
        <div className="relative h-10 w-10">
          <Image
            className="rounded-full"
            src={tweet.user.image}
            layout="fill"
            objectFit="cover"
            alt={tweet.user.name}
          />
        </div>

        <div className="align-center flex flex-1 flex-col">
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.user.name}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.user.name.replace(/\s+/g, "").toLowerCase()}
            </p>
            <TimeAgo
              date={tweet["_createdAt"]}
              className="text-sm text-gray-500"
            />
          </div>
          <p className="pt-1">{tweet.body}</p>
          {tweet.image && (
            <div
              className="relative mt-1 h-28 w-52 shadow-sm
              xs:h-44 xs:w-72 sm:h-52 sm:w-96 md:h-96 md:w-full lg:h-72 
              xl:h-80"
            >
              <Image
                className="rounded-lg"
                src={urlFor(tweet.image).url()}
                layout="fill"
                objectFit="contain"
                alt="tweet image"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <TweetIcon Icon={ChatAlt2Icon} count={5} />
        <TweetIcon Icon={SwitchHorizontalIcon} />
        <TweetIcon Icon={HeartIcon} />
        <TweetIcon Icon={UploadIcon} />
      </div>
    </div>
  );
};

export default Tweet;
