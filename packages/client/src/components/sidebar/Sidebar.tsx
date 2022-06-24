import SidebarRow from "./components/Row";
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
import SidebarLogo from "./components/Logo";

const Sidebar = () => {
  return (
    <section className="flex flex-col">
      <SidebarLogo />
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
      <SidebarRow data-testid="signIn" title="Sign In" Icon={UserIcon} />
      <SidebarRow
        data-testid="more"
        title="More"
        Icon={DotsCircleHorizontalIcon}
      />
    </section>
  );
};

export default Sidebar;
