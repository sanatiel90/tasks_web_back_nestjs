import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { CustomerPhones } from '@prisma/client';

@ValidatorConstraint({ name: 'CustomerPhonesValidator', async: false })
export class CustomerPhonesValidator implements ValidatorConstraintInterface {
  validate(phones: CustomerPhones[], args: ValidationArguments) {
    let valid = true;
    phones.forEach((phone) => {
      Object.keys(phone).forEach((key) => {
        if (key !== 'phone') valid = false;
        if (!valid) return;
      });
      Object.values(phone).forEach((value) => {
        if (typeof value !== 'string') valid = false;
        if (!valid) return;
      });
    });
    return valid;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Telefone informado é inválido';
  }
}
