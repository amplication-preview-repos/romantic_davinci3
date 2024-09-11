import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalHistoryListRelationFilter } from "../medicalHistory/MedicalHistoryListRelationFilter";
import { MedicalTestListRelationFilter } from "../medicalTest/MedicalTestListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  doctors?: DoctorListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  medicalHistories?: MedicalHistoryListRelationFilter;
  medicalTests?: MedicalTestListRelationFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
