import type { FC, SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  count?: number;
}

const TweetIcon: FC<Props> = ({ Icon, count }) => {
  return (
    <div
      className="flex cursor-pointer items-center space-x-3 
      text-gray-400"
    >
      <Icon className="h-5 w-5" />
      {typeof count !== "undefined" && <p>{count}</p>}
    </div>
  );
};

export default TweetIcon;
