import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
