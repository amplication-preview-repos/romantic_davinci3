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
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { MedicalHistoryCreateNestedManyWithoutDoctorsInput } from "./MedicalHistoryCreateNestedManyWithoutDoctorsInput";
import { Type } from "class-transformer";
import { MedicalTestCreateNestedManyWithoutDoctorsInput } from "./MedicalTestCreateNestedManyWithoutDoctorsInput";
import { TransactionCreateNestedManyWithoutDoctorsInput } from "./TransactionCreateNestedManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class DoctorCreateInput {
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
  firstName?: string | null;

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
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => MedicalHistoryCreateNestedManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => MedicalHistoryCreateNestedManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => MedicalHistoryCreateNestedManyWithoutDoctorsInput, {
    nullable: true,
  })
  medicalHistories?: MedicalHistoryCreateNestedManyWithoutDoctorsInput;

  @ApiProperty({
    required: false,
    type: () => MedicalTestCreateNestedManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => MedicalTestCreateNestedManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => MedicalTestCreateNestedManyWithoutDoctorsInput, {
    nullable: true,
  })
  medicalTests?: MedicalTestCreateNestedManyWithoutDoctorsInput;

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
  specialty?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutDoctorsInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutDoctorsInput;

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

export { DoctorCreateInput as DoctorCreateInput };