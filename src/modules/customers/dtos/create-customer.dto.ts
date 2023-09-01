import { CustomerPhones, StatesEnum } from '@prisma/client';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { CustomerPhonesValidator } from '../../../shared/validators/customer-phones-validator';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  entity: string;

  @IsString()
  @IsEnum(StatesEnum)
  @IsNotEmpty()
  uf: StatesEnum;

  @IsString()
  @IsNotEmpty()
  @MinLength(14)
  @MaxLength(14)
  cnpj: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsArray()
  @Validate(CustomerPhonesValidator)
  @IsOptional()
  phones: CustomerPhones[];
}
