import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private _user: any;
  public get user(): any {
    return this._user;
  }
  public set user(value: any) {
    this._user = value;
  }

    constructor() {
        super({
          datasources: {
            db: {
              url: 'postgresql://admin:superadmin@localhost:5432/invoice_manager?schema=public'
            }
          }
        });
      }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
