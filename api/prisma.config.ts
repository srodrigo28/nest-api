import "dotenv/config";
import { defineConfig } from "@prisma/config"; // Verifique se é @prisma/config

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Adicionamos um fallback para garantir que nunca seja undefined durante o parse
    url: process.env.DATABASE_URL || "file:./dev.db",
  },
});