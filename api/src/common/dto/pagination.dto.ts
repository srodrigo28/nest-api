import { Type } from "class-transformer";
import { IsInt, IsOptional, Max, Min } from "class-validator";

export class PaginationDto {
    
    @IsOptional()
    @Type(() => Number)
    @Min(0, {message: 'O limite mínimo é 0'})   
    @Max(50, {message: 'O limite máximo é 50'})
    @IsInt({message: 'O limite deve ser um número inteiro'})
    limit: number;
    
    @IsOptional()
    @Type(() => Number)
    @IsInt({message: 'O offset deve ser um número inteiro'})
    offset: number;
}