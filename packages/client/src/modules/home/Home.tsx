import Sidebar from "components/sidebar";
import Widget from "components/widget";
import FeedModule from "modules/feed";
import type { FC } from "react";
import type { Tweet } from "types/tweet";

interface Props {
  tweets: Tweet[];
}

const HomeModule: FC<Props> = ({ tweets }) => {
  return (
    <main className="grid grid-cols-10">
      <section className="col-span-2">
        <Sidebar />
      </section>
      <section className="col-span-8 lg:col-span-5">
        <FeedModule tweets={tweets} />
      </section>
      <section className="col-span-3 hidden lg:inline">
        <Widget />
      </section>
    </main>
  );
};

export default HomeModule;
