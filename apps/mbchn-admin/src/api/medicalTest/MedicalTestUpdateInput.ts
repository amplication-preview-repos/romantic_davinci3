import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutMedicalTestsInput } from "./TransactionUpdateManyWithoutMedicalTestsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalTestUpdateInput = {
  date?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  results?: InputJsonValue;
  testName?: string | null;
  transactions?: TransactionUpdateManyWithoutMedicalTestsInput;
  user?: UserWhereUniqueInput | null;
};
