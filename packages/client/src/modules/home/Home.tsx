import Feed from "components/feed";
import Sidebar from "components/sidebar";
import Widget from "components/widget";

const HomeModule = () => {
  return (
    <main className="grid grid-cols-9">
      <section className="col-span-2 lg:col-span-1">
        <Sidebar />
      </section>
      <section className="col-span-7 lg:col-span-5">
        <Feed />
      </section>
      <section className="hidden lg:inline col-span-3">
        <Widget />
      </section>
    </main>
  );
};

export default HomeModule;
