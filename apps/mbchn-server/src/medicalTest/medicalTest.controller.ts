import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicalTestService } from "./medicalTest.service";
import { MedicalTestControllerBase } from "./base/medicalTest.controller.base";

@swagger.ApiTags("medicalTests")
@common.Controller("medicalTests")
export class MedicalTestController extends MedicalTestControllerBase {
  constructor(
    protected readonly service: MedicalTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
