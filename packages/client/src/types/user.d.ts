export interface User {
  _type: "user";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  image: string;
  name: string;
  email: string | null;
}
