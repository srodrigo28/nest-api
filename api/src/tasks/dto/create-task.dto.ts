/** Padrão de Projeto Muito Usando Java, C# e etc...
 * Data Transfer Object for creating a new task.
 * DTO > Data Trafsfer Object (Objeto de Transferência de Dados)
 *  Validar dados de entrada transformando-os em um formato adequado para o sistema.
 */

export class CreateTaskDto {
    readonly name: string;
    readonly description: string;
}