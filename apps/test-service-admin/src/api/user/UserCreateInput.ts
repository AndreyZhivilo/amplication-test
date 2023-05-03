import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
