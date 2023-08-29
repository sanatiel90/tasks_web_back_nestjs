import { StatesEnum } from '@prisma/client';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  entity: string;

  @IsEnum(StatesEnum)
  @IsNotEmpty()
  uf: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(14)
  @MaxLength(14)
  cnpj: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsArray()
  @IsOptional()
  phones: string[];
}
