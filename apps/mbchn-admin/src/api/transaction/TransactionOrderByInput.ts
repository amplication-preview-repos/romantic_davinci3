import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  medicalTestId?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
