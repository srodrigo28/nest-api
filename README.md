
# Especial Backend com NestJS e Prisma

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-all.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  Um backend construído com <a href="http://nestjs.com" target="_blank">NestJS</a>, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> e <a href="https://www.prisma.io/" target="_blank">Prisma ORM</a> para uma aplicação eficiente e escalável.
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord" /></a>
</p>

## 🚀 Sobre o Projeto

Este repositório contém o código-fonte do backend do projeto **Especial**. A aplicação utiliza o poder do NestJS para a arquitetura, TypeScript para a tipagem estática e o Prisma como ORM para uma comunicação fluida e segura com o banco de dados.

## 🛠️ Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

```bash
# 1. Clone o repositório
$ git clone https://seu-repositorio.com/especial-backend.git

# 2. Navegue até o diretório do projeto
$ cd especial-backend

# 3. Instale as dependências
$ npm install
```

## ▶️ Executando a Aplicação

Você pode executar a aplicação em diferentes modos, dependendo da sua necessidade.

```bash
# Modo de desenvolvimento com hot-reload
$ npm run start:dev

# Modo de produção (requer build prévio)
$ npm run start:prod

# Build da aplicação para produção
$ npm run build
```

## ✅ Testes

O projeto está configurado com Jest para testes unitários e de ponta a ponta (E2E).

```bash
# Executar testes unitários
$ npm run test

# Executar testes em modo watch
$ npm run test:watch

# Executar testes de ponta a ponta (E2E)
$ npm run test:e2e

# Gerar relatório de cobertura de testes
$ npm run test:cov
```

## 🐘 Comandos do Prisma

O Prisma é utilizado para gerenciar o banco de dados. Abaixo estão os comandos mais comuns.

```bash
# Aplicar as migrations no banco de dados
# Este comando cria o banco se não existir e aplica as migrações pendentes.
$ npx prisma migrate dev

# Gerar o Prisma Client após alterações no schema.prisma
# O NestJS geralmente faz isso automaticamente com o `start:dev`.
$ npx prisma generate

# Abrir o Prisma Studio para visualizar e editar os dados do banco
$ npx prisma studio
```

##  nest Comandos da CLI do NestJS

Utilize a CLI do NestJS para gerar rapidamente os componentes da sua aplicação.

```bash
# Gerar um novo recurso (módulo, controller, service e DTOs)
$ nest g resource nome-do-recurso

# Gerar um novo módulo
$ nest g module nome-do-modulo

# Gerar um novo controller
$ nest g controller nome-do-controller

# Gerar um novo service
$ nest g service nome-do-servico
```

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

