import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("MedicalHistoryDtoObject")
class MedicalHistoryDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    diagnosis!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    description!: string;

    @Field(() => Date)
    @Type(() => Date)
    date!: Date;
}

export { MedicalHistoryDto as MedicalHistoryDto };