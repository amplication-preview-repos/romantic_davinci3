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
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutMedicalTestsInput } from "./TransactionUpdateManyWithoutMedicalTestsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class MedicalTestUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: () => DoctorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereUniqueInput)
  @IsOptional()
  @Field(() => DoctorWhereUniqueInput, {
    nullable: true,
  })
  doctor?: DoctorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  results?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  testName?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutMedicalTestsInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutMedicalTestsInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutMedicalTestsInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutMedicalTestsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { MedicalTestUpdateInput as MedicalTestUpdateInput };