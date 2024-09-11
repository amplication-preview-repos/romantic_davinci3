import { Doctor } from "../doctor/Doctor";
import { MedicalHistory } from "../medicalHistory/MedicalHistory";
import { MedicalTest } from "../medicalTest/MedicalTest";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  createdAt: Date;
  doctors?: Array<Doctor>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  medicalHistories?: Array<MedicalHistory>;
  medicalTests?: Array<MedicalTest>;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
