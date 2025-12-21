import { Injectable } from '@nestjs/common';
import { Tasks } from './entities/task.entity';

@Injectable()
export class TasksService {

    private tasks: Tasks[] = [
        { id: '1', name: 'NextJS', description: 'Learn NextJS framework', completed: true },
        { id: '2', name: 'NestJS', description: 'Build backend with NestJS', completed: false },
        { id: '3', name: 'Expo', description: 'Develop mobile app with Expo', completed: false },
    ];
    
    getTasks(){
        return this.tasks;
    }

    findOne(id: string){
        return this.tasks.find(task => task.id === id);
    }

    create(body: any){
        const newId = this.tasks.length + 1;
        const newTask = { id: newId.toString(), ...body };
        this.tasks.push(newTask);
        console.log('Creating task with data:', newTask);
        return newTask;
    }

    update(id: string, body: any){

        const taskIndex = this.tasks.findIndex(task => task.id === id);

        //  verifica se o índice é válido
        if (taskIndex === -1) {
            return null;
        }

        if(taskIndex >= 0){
            const taskItem = this.tasks[taskIndex];

            this.tasks[taskIndex] = { ...taskItem, ...body };
        }
        
        return this.tasks[taskIndex];
    }
}
