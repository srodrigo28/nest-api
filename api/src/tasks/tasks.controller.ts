import { Body, Controller, Delete, Get, Param, Patch, Post } 
from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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
        return this.tasksService.findOne(id);
    }

    /* Create a new task */
    @Post()
    createTask(@Body()  createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto);
    }

    /* Update an existing task */
    @Patch(":id")
    updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.tasksService.update(id, updateTaskDto);
    }

    /* Delete a task */ 
    @Delete(":id")
    deleteTask(@Param('id') id: string) {
        return this.tasksService.delete(id);
    }
}
