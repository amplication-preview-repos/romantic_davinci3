import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("MedicalTestDtoObject")
class MedicalTestDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    testName!: string;

    @Field(() => GraphQLJSON)
    results!: InputJsonValue;

    @Field(() => Date)
    @Type(() => Date)
    date!: Date;
}

export { MedicalTestDto as MedicalTestDto };