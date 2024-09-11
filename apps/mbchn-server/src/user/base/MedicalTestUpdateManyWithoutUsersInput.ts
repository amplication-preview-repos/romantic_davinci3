/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MedicalTestWhereUniqueInput } from "../../medicalTest/base/MedicalTestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MedicalTestUpdateManyWithoutUsersInput {
  @Field(() => [MedicalTestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicalTestWhereUniqueInput],
  })
  connect?: Array<MedicalTestWhereUniqueInput>;

  @Field(() => [MedicalTestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicalTestWhereUniqueInput],
  })
  disconnect?: Array<MedicalTestWhereUniqueInput>;

  @Field(() => [MedicalTestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicalTestWhereUniqueInput],
  })
  set?: Array<MedicalTestWhereUniqueInput>;
}

export { MedicalTestUpdateManyWithoutUsersInput as MedicalTestUpdateManyWithoutUsersInput };
