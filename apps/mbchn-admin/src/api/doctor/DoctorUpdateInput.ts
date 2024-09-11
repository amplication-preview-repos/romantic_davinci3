import { MedicalHistoryUpdateManyWithoutDoctorsInput } from "./MedicalHistoryUpdateManyWithoutDoctorsInput";
import { MedicalTestUpdateManyWithoutDoctorsInput } from "./MedicalTestUpdateManyWithoutDoctorsInput";
import { TransactionUpdateManyWithoutDoctorsInput } from "./TransactionUpdateManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  medicalHistories?: MedicalHistoryUpdateManyWithoutDoctorsInput;
  medicalTests?: MedicalTestUpdateManyWithoutDoctorsInput;
  specialty?: string | null;
  transactions?: TransactionUpdateManyWithoutDoctorsInput;
  user?: UserWhereUniqueInput | null;
};
