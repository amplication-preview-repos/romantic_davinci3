import { SortOrder } from "../../util/SortOrder";

export type MedicalHistoryOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  diagnosis?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
