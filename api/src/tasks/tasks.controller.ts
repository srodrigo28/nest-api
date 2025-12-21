import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    
    @Get()
    getTasks() {
        return this.tasksService.getTasks();
    }

    @Get(':id')
    findOneTask(@Param('id') id: string) {
        console.log(`Fetching task with id: ${id}`);
        return this.tasksService.findOne(id);
    }

    @Post()
    createTask(@Body()  body: any) {
        return this.tasksService.create(body);
    }

    @Patch(":id")
    updateTask(@Param('id') id: string, @Body() body: any) {
        return this.tasksService.update(id, body);
    }

    @Delete(":id")
    deleteTask(@Param('id') id: string) {
        console.log("Deleting task with ID: ", id);
        return "Task deleted successfully";    
    }
}
