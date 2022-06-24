import PageLayout from "layouts/page";
import HomeModule from "modules/home";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <HomeModule />
    </PageLayout>
  );
};

export default HomePage;
