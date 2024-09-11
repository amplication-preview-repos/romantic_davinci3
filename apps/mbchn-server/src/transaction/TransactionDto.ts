import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("TransactionDtoObject")
class TransactionDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    transactionType!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    amount!: number;

    @Field(() => Date)
    @Type(() => Date)
    date!: Date;
}

export { TransactionDto as TransactionDto };