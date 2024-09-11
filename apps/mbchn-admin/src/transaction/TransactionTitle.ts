import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "transactionType";

export const TransactionTitle = (record: TTransaction): string => {
  return record.transactionType?.toString() || String(record.id);
};
