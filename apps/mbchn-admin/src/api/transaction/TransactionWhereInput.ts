import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MedicalTestWhereUniqueInput } from "../medicalTest/MedicalTestWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  medicalTest?: MedicalTestWhereUniqueInput;
  transactionType?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
