import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { MEDICALTEST_TITLE_FIELD } from "../medicalTest/MedicalTestTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Doctor" target="userId" label="Doctors">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="firstName" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="specialty" source="specialty" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MedicalHistory"
          target="userId"
          label="MedicalHistories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="description" source="description" />
            <TextField label="diagnosis" source="diagnosis" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MedicalTest"
          target="userId"
          label="MedicalTests"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="results" source="results" />
            <TextField label="testName" source="testName" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="userId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="MedicalTest"
              source="medicaltest.id"
              reference="MedicalTest"
            >
              <TextField source={MEDICALTEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="transactionType" source="transactionType" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
