import type { FC, SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  count?: number;
}

const TweetIcon: FC<Props> = ({ Icon, count, ...props }) => {
  return (
    <div
      {...props}
      className="flex cursor-pointer items-center 
      space-x-3 text-gray-400"
    >
      <Icon data-testid="icon" className="h-5 w-5" />
      {typeof count !== "undefined" && <p data-testid="count">{count}</p>}
    </div>
  );
};

export default TweetIcon;
