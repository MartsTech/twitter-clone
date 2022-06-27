import Feed from "components/feed";
import Sidebar from "components/sidebar";
import Widget from "components/widget";

const HomeModule = () => {
  return (
    <main className="grid grid-cols-10">
      <section className="col-span-2">
        <Sidebar />
      </section>
      <section className="col-span-8 lg:col-span-5">
        <Feed />
      </section>
      <section className="col-span-3 hidden lg:inline">
        <Widget />
      </section>
    </main>
  );
};

export default HomeModule;
