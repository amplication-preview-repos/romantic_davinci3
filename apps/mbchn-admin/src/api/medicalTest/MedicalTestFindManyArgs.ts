import { MedicalTestWhereInput } from "./MedicalTestWhereInput";
import { MedicalTestOrderByInput } from "./MedicalTestOrderByInput";

export type MedicalTestFindManyArgs = {
  where?: MedicalTestWhereInput;
  orderBy?: Array<MedicalTestOrderByInput>;
  skip?: number;
  take?: number;
};
