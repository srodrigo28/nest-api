import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Tasks } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {

    constructor(private prisma: PrismaService) { }

    async getTasks() {

        if ((await this.prisma.task.findMany()).length === 0) {
            throw new HttpException("Nenhuma tarefa encontrada.",
                HttpStatus.NOT_FOUND);
        }

        return await this.prisma.task.findMany();
    }

    async findOne(id: number) {
        // 1. Usamos await e findUnique (mais rápido para IDs)
        const task = await this.prisma.task.findUnique({
            where: { id } // Sintaxe curta para id: id
        });

        // 2. Verificamos se a constante 'task' é nula
        if (!task) {
            // 3. Usamos o erro semântico do NestJS (mais limpo)
            throw new NotFoundException(`Tarefa com ID ${id} não encontrada.`);
        }

        return task;

    }
    
    async create(createTaskDto: CreateTaskDto) {
        // 1. Procurar se já existe uma task com esse nome
        const existingTask = await this.prisma.task.findFirst({
            where: { name: createTaskDto.name },
        });

        // 2. Se existir, lançar erro de conflito (409)
        if (existingTask) {
            throw new ConflictException("Essa tarefa já existe com este nome.");
        }

        // 3. Se não existir, criar a nova tarefa
        return await this.prisma.task.create({
            data: {
                name: createTaskDto.name,
                description: createTaskDto.description,
            },
        });
    }

    async update(id: number, updateTaskDto: UpdateTaskDto) {
        // Verifica se a tarefa existe antes de atualizar
        const findTask = await this.prisma.task.findFirst({
            where: { id }
        })

        // Se a tarefa não for encontrada, lança uma exceção
        if (!findTask) {
            throw new HttpException("Tarefa não encontrada.",
                HttpStatus.NOT_FOUND);
        }

        // Atualiza a tarefa com os novos dados
        const task = await this.prisma.task.update({
            where: { id },
            data: updateTaskDto
        });

        // Retorna a tarefa atualizada
        return task;
    }

    async delete(id: number) {

        // Verifica se a tarefa existe antes de atualizar
        const findTask = await this.prisma.task.findFirst({
            where: { id }
        })

        // Se a tarefa não for encontrada, lança uma exceção
        if (!findTask) {
            throw new HttpException("Tarefa não encontrada.",
                HttpStatus.NOT_FOUND);
        }

        // Remove the task from the array
        await this.prisma.task.delete({
            where: { id }
        });

        // Return a success message
        return "Tarefa deletada com sucesso.";
    }
}
