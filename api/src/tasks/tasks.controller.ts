import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    
    /* Get all tasks */
    @Get()
    getTasks() {
        return this.tasksService.getTasks();
    }

    /* Get a single task by ID */
    @Get(':id')
    findOneTask(@Param('id') id: string) {
        console.log(`Fetching task with id: ${id}`);
        return this.tasksService.findOne(id);
    }

    /* Create a new task */
    @Post()
    createTask(@Body()  body: any) {
        return this.tasksService.create(body);
    }

    /* Update an existing task */
    @Patch(":id")
    updateTask(@Param('id') id: string, @Body() body: any) {
        return this.tasksService.update(id, body);
    }

    /* Delete a task */ 
    @Delete(":id")
    deleteTask(@Param('id') id: string) {
        return this.tasksService.delete(id);
    }
}
