import {
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import SidebarLogo from "./components/Logo";
import SidebarRow from "./components/Row";

const Sidebar = () => {
  const session = useSession();

  return (
    <div className="flex flex-col items-center px-4 md:items-start">
      <SidebarLogo data-testid="logo" />
      <SidebarRow data-testid="home" title="Home" Icon={HomeIcon} />
      <SidebarRow data-testid="explore" title="Explore" Icon={HashtagIcon} />
      <SidebarRow
        data-testid="notifications"
        title="Notifications"
        Icon={BellIcon}
      />
      <SidebarRow data-testid="messages" title="Messages" Icon={MailIcon} />
      <SidebarRow
        data-testid="bookmarks"
        title="Bookmarks"
        Icon={BookmarkIcon}
      />
      <SidebarRow data-testid="lists" title="Lists" Icon={CollectionIcon} />
      <SidebarRow
        data-testid="signIn"
        title={session.status !== "authenticated" ? "Sign In" : "Sign Out"}
        Icon={UserIcon}
        onClick={() =>
          session.status !== "authenticated" ? signIn() : signOut()
        }
      />
      <SidebarRow
        data-testid="more"
        title="More"
        Icon={DotsCircleHorizontalIcon}
      />
    </div>
  );
};

export default Sidebar;
