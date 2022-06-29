import type { User } from "./user";

export interface Comment extends CommentBody {
  _type: "comment";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface CommentBody {
  body: string;
  tweet: Tweet;
  user: User;
}
