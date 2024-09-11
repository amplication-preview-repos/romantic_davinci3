import { MedicalHistory } from "../medicalHistory/MedicalHistory";
import { MedicalTest } from "../medicalTest/MedicalTest";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Doctor = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  medicalHistories?: Array<MedicalHistory>;
  medicalTests?: Array<MedicalTest>;
  specialty: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
