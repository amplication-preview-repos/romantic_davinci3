import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { MedicalTestWhereUniqueInput } from "../medicalTest/MedicalTestWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  medicalTest?: MedicalTestWhereUniqueInput | null;
  transactionType?: string | null;
  user?: UserWhereUniqueInput | null;
};
