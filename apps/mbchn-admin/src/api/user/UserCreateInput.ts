import { DoctorCreateNestedManyWithoutUsersInput } from "./DoctorCreateNestedManyWithoutUsersInput";
import { MedicalHistoryCreateNestedManyWithoutUsersInput } from "./MedicalHistoryCreateNestedManyWithoutUsersInput";
import { MedicalTestCreateNestedManyWithoutUsersInput } from "./MedicalTestCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  doctors?: DoctorCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  medicalHistories?: MedicalHistoryCreateNestedManyWithoutUsersInput;
  medicalTests?: MedicalTestCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
