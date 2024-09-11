import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicalHistoryModuleBase } from "./base/medicalHistory.module.base";
import { MedicalHistoryService } from "./medicalHistory.service";
import { MedicalHistoryController } from "./medicalHistory.controller";
import { MedicalHistoryResolver } from "./medicalHistory.resolver";

@Module({
  imports: [MedicalHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicalHistoryController],
  providers: [MedicalHistoryService, MedicalHistoryResolver],
  exports: [MedicalHistoryService],
})
export class MedicalHistoryModule {}
