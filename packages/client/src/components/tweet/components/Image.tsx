import Image from "next/image";
import type { FC } from "react";

interface Props {
  src: string;
  onClick?: () => void;
}

const TweetImage: FC<Props> = ({ src, onClick, ...props }) => {
  return (
    <div
      {...props}
      onClick={onClick}
      className="relative mt-1 h-28 w-52 shadow-sm xs:h-44
      xs:w-72 sm:h-52 sm:w-96 md:h-96 md:w-full lg:h-72 xl:h-80"
    >
      <Image
        data-testid="image"
        priority={true}
        className="rounded-lg"
        src={src}
        layout="fill"
        objectFit="contain"
        alt="tweet"
      />
    </div>
  );
};

export default TweetImage;
