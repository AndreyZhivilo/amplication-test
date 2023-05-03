import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostWhereInput = {
  author?: UserWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
};
