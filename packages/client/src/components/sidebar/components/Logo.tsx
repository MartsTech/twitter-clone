import Image from "next/image";
import { useRouter } from "next/router";
import type { FC } from "react";

const SidebarLogo: FC = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="relative h-10 w-10 cursor-pointer"
    >
      <Image src="/images/logo.png" layout="fill" alt="logo" />
    </div>
  );
};

export default SidebarLogo;
