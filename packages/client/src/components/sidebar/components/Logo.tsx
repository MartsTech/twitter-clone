import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const SidebarLogo: FC = () => {
  return (
    <Link href="/">
      <div className="relative h-10 w-10 cursor-pointer m-3">
        <Image
          data-testid="logo"
          src="/images/logo.png"
          layout="fill"
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default SidebarLogo;
