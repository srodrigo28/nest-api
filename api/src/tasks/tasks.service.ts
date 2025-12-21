import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Tasks } from './entities/task.entity';

@Injectable()
export class TasksService {

    private tasks: Tasks[] = [
        { id: '1', name: 'NextJS', description: 'Learn NextJS framework', completed: true },
        { id: '2', name: 'NestJS', description: 'Build backend with NestJS', completed: false },
        { id: '3', name: 'Expo', description: 'Develop mobile app with Expo', completed: false },
    ];
    
    getTasks(){
        if(this.tasks.length === 0){
            throw new HttpException("Nenhuma tarefa encontrada.", 
                HttpStatus.NOT_FOUND);
        }
        return this.tasks;
    }

    findOne(id: string){
        const task = this.tasks.find(task => task.id === id);

        if(task){
            return task;
        }

        throw new HttpException("Essa tarefa não existe.", 
            HttpStatus.NOT_FOUND);
    }

    create(body: any){
        const newId = this.tasks.length + 1;
        const newTask = { id: newId.toString(), ...body };
        this.tasks.push(newTask);
        console.log('Creating task with data:', newTask);
        return newTask;
    }

    update(id: string, body: any){
        const taskIndex = this.tasks.findIndex(task => task.id === Number(id).toString());

        if(taskIndex < 0){
            console.log('Task not found for update with id:', id);
            throw new HttpException("Essa tarefa não existe.", 
            HttpStatus.NOT_FOUND);
        }

        const taskItem = this.tasks[taskIndex];
        
        this.tasks[taskIndex] = { ...taskItem, ...body };
        
        // return "Tarefa atualizada com sucesso.";
        return this.tasks[taskIndex];
        
    }

    delete(id: string){

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
