import Avatar from "components/avatar";
import type { FC } from "react";
import ReactTimeago from "react-timeago";
import type { Comment as CommentType } from "types/comment";

interface Props {
  comment: CommentType;
}

const Comment: FC<Props> = ({ comment }) => {
  return (
    <div className="relative flex space-x-2">
      <hr className="border-primary/30 absolute left-5 top-10 h-8 border-x" />
      <Avatar src={comment.user.image} size="small" />
      <div className="">
        <div className="flex items-center space-x-1">
          <p className="mr-1 font-bold">{comment.user.name}</p>
          <p className="hidden text-sm text-gray-500 md:inline">
            @{comment.user.name.replace(/\s+/g, "").toLowerCase()}
          </p>
          <ReactTimeago
            date={comment["_createdAt"]}
            className="text-sm text-gray-500"
          />
        </div>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
