import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DoctorTitle } from "../doctor/DoctorTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserTitle } from "../user/UserTitle";

export const MedicalTestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="testName" source="testName" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
