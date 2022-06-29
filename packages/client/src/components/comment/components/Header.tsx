import type { FC } from "react";
import ReactTimeago from "react-timeago";

interface Props {
  name: string;
  createdAt: string;
}

const CommentHeader: FC<Props> = ({ name, createdAt, ...props }) => {
  return (
    <div {...props} className="flex items-center space-x-1">
      <p className="mr-1 font-bold">{name}</p>
      <p className="hidden text-sm text-gray-500 md:inline">
        @{name.replace(/\s+/g, "").toLowerCase()}
      </p>
      <ReactTimeago date={createdAt} className="text-sm text-gray-500" />
    </div>
  );
};

export default CommentHeader;
