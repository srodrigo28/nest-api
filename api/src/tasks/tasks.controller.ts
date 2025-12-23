import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query, UseInterceptors } 
from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { LoggerInterceptor } from 'src/common/interceptors/logger.interceptor';
import { BodyCreateTaskInterceptor } from 'src/common/interceptors/body-create-task.interceptor';
import { AddHeaderInterceptor } from 'src/common/interceptors/add-header-interceptor';

@Controller('tasks')
@UseInterceptors(LoggerInterceptor)
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    
    /* Get all tasks */
    @Get()
    @UseInterceptors(LoggerInterceptor)
    @UseInterceptors(AddHeaderInterceptor)
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
    @UseInterceptors(BodyCreateTaskInterceptor)
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
