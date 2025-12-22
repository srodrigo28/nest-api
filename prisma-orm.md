## Iniciando com prisma ORM 7

> * 1. Instalando types e sqlite
```
npm install prisma @types/node @types/better-sqlite3 --save-dev
```

> * 2. Instalando client e env
```
npm install @prisma/client @prisma/adapter-better-sqlite3 dotenv
```

> * 3 Inicinado O Prisma ORM
```
npx prisma init
```

## Configurando prisma

> * 1 .env
```
DATABASE_URL="file:./dev.db"
```

> * 2 schema.prisma
```
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}

model Task {
  id          Int      @id @default(autoincrement())
  name        String   @unique
  description String?
  completed   Boolean  @default(false)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("tasks")
}
```

> * 3 prisma.config.ts
```
import "dotenv/config";
import { defineConfig } from "@prisma/config"; // Verifique se é @prisma/config

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Adicionamos um fallback para garantir que nunca seja undefined durante o parse
    url: process.env.DATABASE_URL || "file:./dev.db",
  },
});
```

> * Formatando o schema.prisma
```
npx prisma format
```

## Realizando migrate do schema.prisma
> * Gerando
```
npx prisma migrate dev
```

> * prisma generate
```
npx prisma generate
```

## Visualize as tabelas e campos
```
npx prisma studio
```