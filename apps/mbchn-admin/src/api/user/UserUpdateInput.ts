import { DoctorUpdateManyWithoutUsersInput } from "./DoctorUpdateManyWithoutUsersInput";
import { MedicalHistoryUpdateManyWithoutUsersInput } from "./MedicalHistoryUpdateManyWithoutUsersInput";
import { MedicalTestUpdateManyWithoutUsersInput } from "./MedicalTestUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  doctors?: DoctorUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  medicalHistories?: MedicalHistoryUpdateManyWithoutUsersInput;
  medicalTests?: MedicalTestUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};
