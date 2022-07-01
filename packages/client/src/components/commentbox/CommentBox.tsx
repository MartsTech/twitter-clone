import { useSession } from "next-auth/react";
import type { FC, FormEvent } from "react";
import { useState } from "react";
import type { CommentBody } from "types/comment";
import createComment from "utils/comment/createComment";

interface Props {
  tweetId: string;
  onComment: () => void;
}

const CommentBox: FC<Props> = ({ tweetId, onComment }) => {
  const [input, setInput] = useState("");
  const [submiting, setSubmiting] = useState(false);
  const session = useSession();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    data: CommentBody
  ) => {
    e.preventDefault();

    if (submiting) {
      return;
    }
    setSubmiting(true);

    const rev = await createComment(data);

    setInput("");

    await onComment();
    setSubmiting(false);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, { body: input, tweetId })}
      className="mt-3 flex space-x-3"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
        type="text"
        placeholder="Write a comment..."
      />
      <button
        disabled={!input.length || session.status !== "authenticated"}
        className="text-primary disabled:text-gray-200"
      >
        Post
      </button>
    </form>
  );
};

export default CommentBox;
