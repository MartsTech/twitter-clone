import Image from "next/image";
import type { FC } from "react";

interface Props {
  src?: string;
  size?: "small" | "normal" | "large";
}

const Avatar: FC<Props> = ({ src, size = "normal", ...props }) => {
  return (
    <div
      {...props}
      className={`relative ${
        size === "small"
          ? "h-7 w-7"
          : size === "large"
          ? "h-14 w-14 "
          : "h-10 w-10"
      }`}
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
