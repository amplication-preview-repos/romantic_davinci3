/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MedicalHistoryService } from "../medicalHistory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MedicalHistoryCreateInput } from "./MedicalHistoryCreateInput";
import { MedicalHistory } from "./MedicalHistory";
import { MedicalHistoryFindManyArgs } from "./MedicalHistoryFindManyArgs";
import { MedicalHistoryWhereUniqueInput } from "./MedicalHistoryWhereUniqueInput";
import { MedicalHistoryUpdateInput } from "./MedicalHistoryUpdateInput";
import { MedicalHistoryDto } from "../MedicalHistoryDto";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MedicalHistoryControllerBase {
  constructor(
    protected readonly service: MedicalHistoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MedicalHistory })
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMedicalHistory(
    @common.Body() data: MedicalHistoryCreateInput
  ): Promise<MedicalHistory> {
    return await this.service.createMedicalHistory({
      data: {
        ...data,

        doctor: data.doctor
          ? {
              connect: data.doctor,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        date: true,
        description: true,
        diagnosis: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MedicalHistory] })
  @ApiNestedQuery(MedicalHistoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async medicalHistories(
    @common.Req() request: Request
  ): Promise<MedicalHistory[]> {
    const args = plainToClass(MedicalHistoryFindManyArgs, request.query);
    return this.service.medicalHistories({
      ...args,
      select: {
        createdAt: true,
        date: true,
        description: true,
        diagnosis: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MedicalHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async medicalHistory(
    @common.Param() params: MedicalHistoryWhereUniqueInput
  ): Promise<MedicalHistory | null> {
    const result = await this.service.medicalHistory({
      where: params,
      select: {
        createdAt: true,
        date: true,
        description: true,
        diagnosis: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MedicalHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMedicalHistory(
    @common.Param() params: MedicalHistoryWhereUniqueInput,
    @common.Body() data: MedicalHistoryUpdateInput
  ): Promise<MedicalHistory | null> {
    try {
      return await this.service.updateMedicalHistory({
        where: params,
        data: {
          ...data,

          doctor: data.doctor
            ? {
                connect: data.doctor,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          date: true,
          description: true,
          diagnosis: true,

          doctor: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MedicalHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMedicalHistory(
    @common.Param() params: MedicalHistoryWhereUniqueInput
  ): Promise<MedicalHistory | null> {
    try {
      return await this.service.deleteMedicalHistory({
        where: params,
        select: {
          createdAt: true,
          date: true,
          description: true,
          diagnosis: true,

          doctor: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/medical-histories/:id")
  @swagger.ApiOkResponse({
    type: MedicalHistoryDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetMedicalHistoryById(
    @common.Body()
    body: string
  ): Promise<MedicalHistoryDto> {
    return this.service.GetMedicalHistoryById(body);
  }

  @common.Get("/medical-histories")
  @swagger.ApiOkResponse({
    type: MedicalHistoryDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ListMedicalHistories(
    @common.Body()
    body: MedicalHistoryDto[]
  ): Promise<MedicalHistoryDto[]> {
    return this.service.ListMedicalHistories(body);
  }
}