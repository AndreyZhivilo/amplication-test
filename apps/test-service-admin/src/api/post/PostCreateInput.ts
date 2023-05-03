import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  author?: UserWhereUniqueInput | null;
  title?: string | null;
};
