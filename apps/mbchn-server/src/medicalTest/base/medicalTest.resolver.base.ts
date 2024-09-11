/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { MedicalTest } from "./MedicalTest";
import { MedicalTestCountArgs } from "./MedicalTestCountArgs";
import { MedicalTestFindManyArgs } from "./MedicalTestFindManyArgs";
import { MedicalTestFindUniqueArgs } from "./MedicalTestFindUniqueArgs";
import { CreateMedicalTestArgs } from "./CreateMedicalTestArgs";
import { UpdateMedicalTestArgs } from "./UpdateMedicalTestArgs";
import { DeleteMedicalTestArgs } from "./DeleteMedicalTestArgs";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { Doctor } from "../../doctor/base/Doctor";
import { User } from "../../user/base/User";
import { MedicalTestDto } from "../MedicalTestDto";
import { MedicalTestService } from "../medicalTest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicalTest)
export class MedicalTestResolverBase {
  constructor(
    protected readonly service: MedicalTestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MedicalTest",
    action: "read",
    possession: "any",
  })
  async _medicalTestsMeta(
    @graphql.Args() args: MedicalTestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MedicalTest])
  @nestAccessControl.UseRoles({
    resource: "MedicalTest",
    action: "read",
    possession: "any",
  })
  async medicalTests(
    @graphql.Args() args: MedicalTestFindManyArgs
  ): Promise<MedicalTest[]> {
    return this.service.medicalTests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MedicalTest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MedicalTest",
    action: "read",
    possession: "own",
  })
  async medicalTest(
    @graphql.Args() args: MedicalTestFindUniqueArgs
  ): Promise<MedicalTest | null> {
    const result = await this.service.medicalTest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicalTest)
  @nestAccessControl.UseRoles({
    resource: "MedicalTest",
    action: "create",
    possession: "any",
  })
  async createMedicalTest(
    @graphql.Args() args: CreateMedicalTestArgs
  ): Promise<MedicalTest> {
    return await this.service.createMedicalTest({
      ...args,
      data: {
        ...args.data,

        doctor: args.data.doctor
          ? {
              connect: args.data.doctor,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicalTest)
  @nestAccessControl.UseRoles({
    resource: "MedicalTest",
    action: "update",
    possession: "any",
  })
  async updateMedicalTest(
    @graphql.Args() args: UpdateMedicalTestArgs
  ): Promise<MedicalTest | null> {
    try {
      return await this.service.updateMedicalTest({
        ...args,
        data: {
          ...args.data,

          doctor: args.data.doctor
            ? {
                connect: args.data.doctor,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MedicalTest)
  @nestAccessControl.UseRoles({
    resource: "MedicalTest",
    action: "delete",
    possession: "any",
  })
  async deleteMedicalTest(
    @graphql.Args() args: DeleteMedicalTestArgs
  ): Promise<MedicalTest | null> {
    try {
      return await this.service.deleteMedicalTest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @graphql.Parent() parent: MedicalTest,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Doctor, {
    nullable: true,
    name: "doctor",
  })
  @nestAccessControl.UseRoles({
    resource: "Doctor",
    action: "read",
    possession: "any",
  })
  async getDoctor(
    @graphql.Parent() parent: MedicalTest
  ): Promise<Doctor | null> {
    const result = await this.service.getDoctor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: MedicalTest): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => MedicalTestDto)
  async GetMedicalTestById(
    @graphql.Args("args")
    args: string
  ): Promise<MedicalTestDto> {
    return this.service.GetMedicalTestById(args);
  }

  @graphql.Query(() => [MedicalTestDto])
  async ListMedicalTests(
    @graphql.Args()
    args: MedicalTestDto[]
  ): Promise<MedicalTestDto[]> {
    return this.service.ListMedicalTests(args);
  }
}
