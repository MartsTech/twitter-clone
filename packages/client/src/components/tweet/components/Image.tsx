import Image from "next/image";
import type { FC } from "react";
import type { Image as ImageType } from "types/tweet";
import { urlFor } from "utils/sanity";

interface Props {
  image: ImageType;
}

const TweetImage: FC<Props> = ({ image, ...props }) => {
  return (
    <div
      {...props}
      className="relative mt-1 h-28 w-52 shadow-sm xs:h-44
      xs:w-72 sm:h-52 sm:w-96 md:h-96 md:w-full lg:h-72 xl:h-80"
    >
      <Image
        data-testid="image"
        className="rounded-lg"
        src={urlFor(image).url()}
        layout="fill"
        objectFit="contain"
        alt="tweet"
      />
    </div>
  );
};

export default TweetImage;
