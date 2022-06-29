import type { User } from "./user";

export interface Tweet extends TweetBody {
  _type: "tweet";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  isBlocked: boolean;
}

export interface TweetBody {
  body: string;
  image: Image | null;
  user: User;
}

export interface Image {
  _type: "image";
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
