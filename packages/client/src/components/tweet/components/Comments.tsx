import Comment from "components/comment";
import type { FC } from "react";
import type { Comment as CommentType } from "types/comment";

interface Props {
  comments: CommentType[];
}

const TweetComments: FC<Props> = ({ comments }) => {
  return (
    <div
      className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll
      border-t border-gray-100 p-5 scrollbar-thin
      scrollbar-track-gray-100 scrollbar-thumb-gray-300"
    >
      {comments.map((comment) => (
        <Comment data-testid="comment" key={comment["_id"]} comment={comment} />
      ))}
    </div>
  );
};

export default TweetComments;
