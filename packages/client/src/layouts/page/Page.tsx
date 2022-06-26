import Head from "next/head";
import type { FC } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const PageLayout: FC<Props> = ({ title = "Twitter Clone", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-7xl mx-auto">{children}</div>
    </>
  );
};

export default PageLayout;
