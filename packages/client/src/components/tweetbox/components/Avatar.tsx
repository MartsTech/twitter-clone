import { useSession } from "next-auth/react";
import Image from "next/image";

const TweetBoxAvatar = () => {
  const session = useSession();

  return (
    <div className="relative mt-4 h-14 w-14">
      <Image
        data-testid="avatar"
        src={
          session.status === "authenticated" &&
          typeof session.data.user?.image === "string"
            ? session.data.user?.image
            : "/images/avatar.jpg"
        }
        layout="fill"
        objectFit="cover"
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
};

export default TweetBoxAvatar;
