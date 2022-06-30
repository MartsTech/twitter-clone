import { useCallback, useEffect, useRef, useState } from "react";
import type { Comment } from "types/comment";
import fetchCommentsByTweetId from "utils/comment/fetchCommentsByTweetId";

const useTweetComments = (tweetId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const isMounted = useRef(false);

  const refresh = useCallback(async () => {
    const data = await fetchCommentsByTweetId(tweetId);
    setComments(data);
  }, [tweetId]);

  useEffect(() => {
    if (!isMounted.current) {
      refresh();
      isMounted.current = true;
    }
  }, [refresh]);

  return [comments, refresh] as const;
};

export default useTweetComments;
