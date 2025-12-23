import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } 
from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    
    /* Get all tasks */
    @Get()
    findAllTasks(@Query() paginationDto: PaginationDto) {
        return this.tasksService.findAll(paginationDto);
    }

    /* Get a single task by ID */
    @Get(':id')
    findOneTask(@Param('id', ParseIntPipe) id: number) {
        return this.tasksService.findOne(id);
    }

    /* Create a new task */
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto);
    }

    /* Update an existing task */
    @Patch(":id")
    updateTask(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto) {
        return this.tasksService.update(id, updateTaskDto);
    }

    /* Delete a task */ 
    @Delete(":id")
    deleteTask(@Param('id', ParseIntPipe) id: number) {
        return this.tasksService.delete(id);
    }
}
