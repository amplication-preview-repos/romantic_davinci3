import { Doctor } from "../doctor/Doctor";
import { MedicalTest } from "../medicalTest/MedicalTest";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  doctor?: Doctor | null;
  id: string;
  medicalTest?: MedicalTest | null;
  transactionType: string | null;
  updatedAt: Date;
  user?: User | null;
};
