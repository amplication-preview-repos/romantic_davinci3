import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DoctorTitle } from "../doctor/DoctorTitle";
import { UserTitle } from "../user/UserTitle";

export const MedicalHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="diagnosis" source="diagnosis" />
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
