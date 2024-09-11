import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutMedicalTestsInput } from "./TransactionCreateNestedManyWithoutMedicalTestsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalTestCreateInput = {
  date?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  results?: InputJsonValue;
  testName?: string | null;
  transactions?: TransactionCreateNestedManyWithoutMedicalTestsInput;
  user?: UserWhereUniqueInput | null;
};
