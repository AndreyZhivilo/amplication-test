import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  author?: UserWhereUniqueInput | null;
  title?: string | null;
};
