import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // CUIDADO Adjust the import path as necessary
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const prismaBetterSqlite3 = new PrismaBetterSqlite3({
            url: process.env.DATABASE_URL || 'file:./dev.db',
        })
        super({ adapter: prismaBetterSqlite3 });
    }
}
