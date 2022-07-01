import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import Avatar from "components/avatar";
import { TweetImage } from "components/tweet";
import useSelectedImage from "hooks/useSelectedImage";
import { useSession } from "next-auth/react";
import type { FC, FormEvent } from "react";
import { useState } from "react";
import type { TweetBody } from "types/tweet";
import createTweet from "utils/tweet/createTweet";
import uploadTweetImage from "utils/tweet/uploadTweetImage";
import TweetBoxIcon from "./components/Icon";

interface Props {
  onTweet: () => Promise<void>;
}

const TweetBox: FC<Props> = ({ onTweet }) => {
  const [input, setInput] = useState("");
  const [submiting, setSubmiting] = useState(false);
  const [imageRef, imageFile, imageDataUrl, handleSelectImage] =
    useSelectedImage();
  const session = useSession();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    data: TweetBody,
    imageFile: File | null,
    onTweet: () => Promise<void>
  ) => {
    e.preventDefault();

    if (submiting) {
      return;
    }
    setSubmiting(true);

    const rev = await createTweet(data);

    setInput("");
    handleSelectImage();

    if (imageFile && rev) {
      await uploadTweetImage({ rev, imageFile });
    }

    await onTweet();
    setSubmiting(false);
  };

  return (
    <div className="flex space-x-2 p-5">
      <div className="mt-4">
        <Avatar
          data-testid="avatar"
          src={(session.data && session.data?.user?.image) || undefined}
          size="large"
        />
      </div>
      <div className="flex flex-1 items-center pl-2">
        <form
          onSubmit={(e) => handleSubmit(e, { body: input }, imageFile, onTweet)}
          className="flex flex-1 flex-col"
        >
          <input
            data-testid="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-primary">
              <TweetBoxIcon
                data-testid="imageIcon"
                Icon={PhotographIcon}
                onClick={() => imageRef.current?.click()}
              />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              data-testid="button"
              disabled={!input.length || session.status !== "authenticated"}
              className="rounded-full bg-primary px-5 py-2 
              font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          <input
            ref={imageRef}
            type="file"
            hidden
            onChange={handleSelectImage}
          />
          {imageDataUrl && (
            <div className="-ml-5">
              <TweetImage
                src={imageDataUrl}
                onClick={() => handleSelectImage()}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
