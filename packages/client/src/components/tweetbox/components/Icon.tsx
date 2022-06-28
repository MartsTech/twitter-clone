import type { FC, SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const TweetBoxIcon: FC<Props> = ({ Icon }) => {
  return (
    <Icon
      data-testid="icon"
      className="h-5 w-5 cursor-pointer transition-transform 
      duration-150 ease-out hover:scale-150"
    />
  );
};

export default TweetBoxIcon;
