import Image from "next/image";
import Link from "next/link";

const SidebarLogo = () => {
  return (
    <Link href="/">
      <div className="relative m-4 h-10 w-10 cursor-pointer">
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
