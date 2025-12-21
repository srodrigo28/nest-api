/** Padrão de Projeto Muito Usando Java, C# e etc...
 * Data Transfer Object for creating a new task.
 * DTO > Data Trafsfer Object (Objeto de Transferência de Dados)
 *  Validar dados de entrada transformando-os em um formato adequado para o sistema.
 */

import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTaskDto {

    @IsString( {message: 'O nome deve ser uma string' } )
    @IsNotEmpty({ message: 'O nome não pode estar vazio' })
    @MinLength(5, { message: 'O nome deve ter no mínimo 5 caracteres' })
    readonly name: string;

    @IsString( {message: 'A descrição deve ser uma string' } )
    @IsNotEmpty( { message: 'A descrição não pode estar vazia' } )
    @MinLength(10, { message: 'A descrição deve ter no mínimo 10 caracteres' })
    readonly description: string;
}