import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicalTestModuleBase } from "./base/medicalTest.module.base";
import { MedicalTestService } from "./medicalTest.service";
import { MedicalTestController } from "./medicalTest.controller";
import { MedicalTestResolver } from "./medicalTest.resolver";

@Module({
  imports: [MedicalTestModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicalTestController],
  providers: [MedicalTestService, MedicalTestResolver],
  exports: [MedicalTestService],
})
export class MedicalTestModule {}
