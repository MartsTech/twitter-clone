import type { User } from "./user";

export interface Comment {
  _type: "comment";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  body: string;
  user: User;
}

export interface CommentBody {
  body: string;
  tweetId: string;
}
