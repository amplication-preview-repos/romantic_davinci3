import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalTestWhereInput = {
  date?: DateTimeNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  results?: JsonFilter;
  testName?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
