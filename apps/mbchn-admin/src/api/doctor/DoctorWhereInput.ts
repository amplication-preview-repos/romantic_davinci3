import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalHistoryListRelationFilter } from "../medicalHistory/MedicalHistoryListRelationFilter";
import { MedicalTestListRelationFilter } from "../medicalTest/MedicalTestListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  medicalHistories?: MedicalHistoryListRelationFilter;
  medicalTests?: MedicalTestListRelationFilter;
  specialty?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
