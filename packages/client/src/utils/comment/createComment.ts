import type { CommentBody } from "types/comment";

const createComment = async (props: CommentBody) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sanity/createComment`,
    { method: "POST", body: JSON.stringify(props) }
  );
  const data = await res.json();
  const rev: string | null = data.rev;
  return rev;
};

export default createComment;
