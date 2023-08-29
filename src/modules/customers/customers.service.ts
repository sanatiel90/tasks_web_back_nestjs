import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from './dtos/create-customer.dto';
import { CustomersRepository } from '../../shared/database/repositories/customers.repositories';

@Injectable()
export class CustomersService {
  constructor(private readonly customersRepositories: CustomersRepository) {}

  async store(createCustomerDTO: CreateCustomerDTO) {
    const { entity, cnpj, email, uf, phones } = createCustomerDTO;

    const customer = await this.customersRepositories.store({
      data: {
        entity,
        cnpj,
        uf: 'CE',
        email,
        phones: {
          createMany: {
            data: {
              phone: phones,
            },
          },
        },
      },
    });
  }
}
