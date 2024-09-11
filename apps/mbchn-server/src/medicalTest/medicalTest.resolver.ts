import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MedicalTestResolverBase } from "./base/medicalTest.resolver.base";
import { MedicalTest } from "./base/MedicalTest";
import { MedicalTestService } from "./medicalTest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicalTest)
export class MedicalTestResolver extends MedicalTestResolverBase {
  constructor(
    protected readonly service: MedicalTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
