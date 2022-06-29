import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const SidebarLogo: FC = ({ ...props }) => {
  return (
    <Link href="/">
      <div {...props} className="relative m-4 h-10 w-10 cursor-pointer">
        <Image
          data-testid="image"
          src="/images/logo.png"
          layout="fill"
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default SidebarLogo;
