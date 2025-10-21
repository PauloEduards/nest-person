import { IsCPF, IsDate } from "@clockinit/brazilian-class-validator";
import {  IsEmail, IsString, Length } from "class-validator";

export class CreatePersonDto {
    @IsString({ message: 'Título deve ser uma string' })
    @Length(1, 100, { message: 'Título deve ter entre 1 e 100 caracteres' })
    name: string;

    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @IsDate({ message: 'Data de nascimento inválida' })
    nascimento: Date;
    
    @IsCPF({ message: 'CPF inválido' })
    cpf: string;
}

