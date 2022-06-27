import Image from "next/image";

const TweetBoxAvatar = () => {
  return (
    <div className="relative mt-4 h-14 w-14">
      <Image
        src="/images/avatar.jpg"
        layout="fill"
        objectFit="cover"
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
};

export default TweetBoxAvatar;
