import { MedicalHistory as TMedicalHistory } from "../api/medicalHistory/MedicalHistory";

export const MEDICALHISTORY_TITLE_FIELD = "diagnosis";

export const MedicalHistoryTitle = (record: TMedicalHistory): string => {
  return record.diagnosis?.toString() || String(record.id);
};
