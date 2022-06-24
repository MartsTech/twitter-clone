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
      <Sidebar.Logo />
      <Sidebar.Row title="Home" Icon={HomeIcon} />
      <Sidebar.Row title="Explore" Icon={HashtagIcon} />
      <Sidebar.Row title="Notifications" Icon={BellIcon} />
      <Sidebar.Row title="Messages" Icon={MailIcon} />
      <Sidebar.Row title="Bookmarks" Icon={BookmarkIcon} />
      <Sidebar.Row title="Lists" Icon={CollectionIcon} />
      <Sidebar.Row title="Sign In" Icon={UserIcon} />
      <Sidebar.Row title="More" Icon={DotsCircleHorizontalIcon} />
    </section>
  );
};

Sidebar.Logo = SidebarLogo;
Sidebar.Row = SidebarRow;

export default Sidebar;
