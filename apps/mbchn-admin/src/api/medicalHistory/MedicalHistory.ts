import { Doctor } from "../doctor/Doctor";
import { User } from "../user/User";

export type MedicalHistory = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  diagnosis: string | null;
  doctor?: Doctor | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
