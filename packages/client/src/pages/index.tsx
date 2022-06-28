import PageLayout from "layouts/page";
import HomeModule from "modules/home";
import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import type { Tweet } from "types/tweet";
import fetchTweets from "utils/tweet/fetchTweets";

interface Props {
  tweets: Tweet[];
}

const HomePage: NextPage<Props> = ({ tweets }) => {
  return (
    <PageLayout>
      <HomeModule tweets={tweets} />
    </PageLayout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const tweets = await fetchTweets();

  return {
    props: {
      session,
      tweets,
    },
  };
};
