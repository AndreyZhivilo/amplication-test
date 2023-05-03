import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
