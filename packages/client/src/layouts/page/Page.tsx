import Sidebar from "components/sidebar";
import Widget from "components/widget";
import Head from "next/head";
import type { FC } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const PageLayout: FC<Props> = ({ title = "Twitter Clone", children }) => {
  return (
    <div className="mx-auto max-h-screen max-w-7xl overflow-hidden">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="grid grid-cols-10">
        <section className="col-span-2">
          <Sidebar />
        </section>
        <section className="col-span-8 lg:col-span-5">
          <>{children}</>
        </section>
        <section className="col-span-3 hidden lg:inline">
          <Widget />
        </section>
      </main>
    </div>
  );
};

export default PageLayout;
