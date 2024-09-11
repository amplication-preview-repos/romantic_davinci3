import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DoctorTitle } from "../doctor/DoctorTitle";
import { MedicalTestTitle } from "../medicalTest/MedicalTestTitle";
import { UserTitle } from "../user/UserTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="medicalTest.id"
          reference="MedicalTest"
          label="MedicalTest"
        >
          <SelectInput optionText={MedicalTestTitle} />
        </ReferenceInput>
        <TextInput label="transactionType" source="transactionType" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
