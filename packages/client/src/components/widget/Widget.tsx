import { TwitterTimelineEmbed } from "react-twitter-embed";
import WidgetSearch from "./components/Search";

const Widget = () => {
  return (
    <section className="px-2 mt-2">
      <WidgetSearch />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="martstech"
        options={{ height: 1000 }}
      />
    </section>
  );
};

export default Widget;
