import { useCallback, useEffect, useRef, useState } from "react";
import type { Comment } from "types/comment";
import fetchComments from "utils/comment/fetchComments";

const useTweetComments = (tweetId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const isMounted = useRef(false);

  const refresh = useCallback(async () => {
    const data = await fetchComments(tweetId);
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
