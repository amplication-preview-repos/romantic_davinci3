/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DoctorUpdateManyWithoutUsersInput } from "./DoctorUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { MedicalHistoryUpdateManyWithoutUsersInput } from "./MedicalHistoryUpdateManyWithoutUsersInput";
import { MedicalTestUpdateManyWithoutUsersInput } from "./MedicalTestUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DoctorUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DoctorUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DoctorUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  doctors?: DoctorUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => MedicalHistoryUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MedicalHistoryUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MedicalHistoryUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  medicalHistories?: MedicalHistoryUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MedicalTestUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MedicalTestUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MedicalTestUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  medicalTests?: MedicalTestUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };