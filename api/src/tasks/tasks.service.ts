import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Tasks } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {

    constructor(private prisma: PrismaService) {}

    private tasks: Tasks[] = [
        { id: 1, name: 'NextJS', description: 'Learn NextJS framework', completed: true },
        { id: 2, name: 'NestJS', description: 'Build backend with NestJS', completed: false },
        { id: 3, name: 'Expo', description: 'Develop mobile app with Expo', completed: false },
    ];
    
    async getTasks(){
        
        if(this.tasks.length === 0){
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

    create(createTaskDto: CreateTaskDto){
        const newTask = this.prisma.task.create({
            data: {
                name: createTaskDto.name,
                description: createTaskDto.description
            },
        });

        return newTask;
    }

    update(id: number, updateTaskDto: UpdateTaskDto){

        const taskIndex = this.tasks.findIndex(
            task => task.id === id);

        if(taskIndex < 0) {
            console.log('Task not found for update with id:', id);
            throw new HttpException("Essa tarefa não existe.", 
            HttpStatus.NOT_FOUND);
        }

        const taskItem = this.tasks[taskIndex];
        
        this.tasks[taskIndex] = { ...taskItem, ...updateTaskDto };
        
        // return "Tarefa atualizada com sucesso.";
        return this.tasks[taskIndex];
        
    }

    delete(id: number){

        // Find the index of the task to be deleted
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        
        // If task not found, throw an exception
        if(taskIndex < 0){
            throw new HttpException("Essa tarefa não existe.", 
            HttpStatus.NOT_FOUND);
        }

        // Remove the task from the array
        this.tasks.splice(taskIndex, 1);

        // Return a success message
        return "Tarefa deletada com sucesso.";    
    }
}
