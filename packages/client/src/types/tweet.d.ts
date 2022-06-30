import type { User } from "./user";

export interface Tweet {
  _type: "tweet";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  isBlocked: boolean;
  body: string;
  user: User;
  image: Image | null;
}

export interface TweetBody {
  body: string;
}

export interface Image {
  _type: "image";
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
