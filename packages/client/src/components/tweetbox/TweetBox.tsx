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
import { useState } from "react";
import TweetBoxIcon from "./components/Icon";

const TweetBox = () => {
  const [input, setInput] = useState("");
  const [imageRef, selectedImage, setSelectedImage, handleSelectImage] =
    useSelectedImage();
  const session = useSession();

  return (
    <div className="flex space-x-2 p-5">
      <div className="mt-4">
        <Avatar
          data-testid="avatar"
          src={session.data?.user?.image || undefined}
          size="large"
        />
      </div>
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
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
          {selectedImage && (
            <div className="-ml-5">
              <TweetImage
                src={selectedImage}
                onClick={() => setSelectedImage(null)}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
