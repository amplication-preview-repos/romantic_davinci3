import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalHistoryCreateInput = {
  date?: Date | null;
  description?: string | null;
  diagnosis?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
