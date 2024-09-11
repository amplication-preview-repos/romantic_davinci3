import { MedicalHistoryCreateNestedManyWithoutDoctorsInput } from "./MedicalHistoryCreateNestedManyWithoutDoctorsInput";
import { MedicalTestCreateNestedManyWithoutDoctorsInput } from "./MedicalTestCreateNestedManyWithoutDoctorsInput";
import { TransactionCreateNestedManyWithoutDoctorsInput } from "./TransactionCreateNestedManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  medicalHistories?: MedicalHistoryCreateNestedManyWithoutDoctorsInput;
  medicalTests?: MedicalTestCreateNestedManyWithoutDoctorsInput;
  specialty?: string | null;
  transactions?: TransactionCreateNestedManyWithoutDoctorsInput;
  user?: UserWhereUniqueInput | null;
};
