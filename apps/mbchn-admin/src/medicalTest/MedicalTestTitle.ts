import { MedicalTest as TMedicalTest } from "../api/medicalTest/MedicalTest";

export const MEDICALTEST_TITLE_FIELD = "testName";

export const MedicalTestTitle = (record: TMedicalTest): string => {
  return record.testName?.toString() || String(record.id);
};
