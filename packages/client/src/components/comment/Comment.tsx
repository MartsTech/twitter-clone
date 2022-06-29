import Avatar from "components/avatar";
import { TweetHeader } from "components/tweet";
import type { FC } from "react";
import type { Comment as CommentType } from "types/comment";

interface Props {
  comment: CommentType;
}

const Comment: FC<Props> = ({ comment, ...props }) => {
  return (
    <div {...props} className="relative flex space-x-2">
      <hr className="border-primary/30 absolute left-5 top-10 h-8 border-x" />
      <Avatar data-testid="avatar" src={comment.user.image} size="small" />
      <div>
        <TweetHeader
          data-testid="header"
          name={comment.user.name}
          createdAt={comment["_createdAt"]}
        />
        <p data-testid="body">{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
