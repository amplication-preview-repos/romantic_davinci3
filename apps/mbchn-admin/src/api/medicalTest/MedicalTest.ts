import { Doctor } from "../doctor/Doctor";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type MedicalTest = {
  createdAt: Date;
  date: Date | null;
  doctor?: Doctor | null;
  id: string;
  results: JsonValue;
  testName: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
