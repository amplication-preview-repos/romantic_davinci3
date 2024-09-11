import { SortOrder } from "../../util/SortOrder";

export type MedicalTestOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  results?: SortOrder;
  testName?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
