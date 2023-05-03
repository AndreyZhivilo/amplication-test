import { User } from "../user/User";

export type Post = {
  author?: User | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
