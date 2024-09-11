import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MedicalHistoryWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  diagnosis?: StringNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
