import { IsString, IsOptional, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'Título deve ser uma string' })
  @Length(1, 100, { message: 'Título deve ter entre 1 e 100 caracteres' })
  title: string;

  @IsString({ message: 'Descrição deve ser uma string' })
  @IsOptional()
  @Length(0, 500, { message: 'Descrição pode ter no máximo 500 caracteres' })
  description?: string;
}


/*
nome
email 
data de nascimento
cpf
*/

