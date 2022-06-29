import Image from "next/image";
import type { FC } from "react";

interface Props {
  src?: string;
  large?: boolean;
}

const Avatar: FC<Props> = ({ src, large = false, ...props }) => {
  return (
    <div
      {...props}
      className={`relative ${!large ? "h-10 w-10 " : "h-14 w-14"}`}
    >
      <Image
        data-testid="image"
        src={typeof src === "string" ? src : "/images/avatar.jpg"}
        layout="fill"
        objectFit="cover"
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
