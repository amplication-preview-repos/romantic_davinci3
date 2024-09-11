import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicalTestServiceBase } from "./base/medicalTest.service.base";

@Injectable()
export class MedicalTestService extends MedicalTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
