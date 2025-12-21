import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateTaskDto {

    @IsOptional()
    @IsString( {message: 'O nome deve ser uma string' } )
    @MinLength(5, { message: 'O nome deve ter no mínimo 5 caracteres' })    
    readonly name?: string;

    @IsOptional()
    @IsString( {message: 'A descrição deve ser uma string' } )
    @MinLength(10, { message: 'A descrição deve ter no mínimo 10 caracteres' }) 
    readonly description?: string;

    @IsOptional()
    readonly completed?: boolean;
}