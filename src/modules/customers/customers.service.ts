import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from './dtos/create-customer.dto';
import { CustomersRepository } from '../../shared/database/repositories/customers.repositories';
import { validateCNPJ } from '../../shared/utils/validateCNPJ';
import { UpdateCustomerDTO } from './dtos/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private readonly customersRepositories: CustomersRepository) {}

  async store(createCustomerDTO: CreateCustomerDTO) {
    const { entity, cnpj, email, uf, phones } = createCustomerDTO;
    await this.validate(createCustomerDTO);
    const customer = await this.customersRepositories.store({
      data: {
        entity,
        cnpj,
        uf,
        email,
        phones: {
          createMany: {
            data: phones,
          },
        },
      },
      include: {
        phones: true,
      },
    });

    return customer;
  }

  async index() {
    return await this.customersRepositories.findMany();
  }

  async show(id: number) {
    return await this.customersRepositories.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCustomerDTO: UpdateCustomerDTO) {
    const customer = await this.customersRepositories.findUnique({
      where: {
        id,
      },
    });
    if (!customer) {
      throw new BadRequestException('Customer not found');
    }
    return this.customersRepositories.update({
      where: { id },
      data: {
        ...updateCustomerDTO,
      },
    });
  }

  private async validate(createCustomerDTO: CreateCustomerDTO) {
    const { cnpj } = createCustomerDTO;
    if (!validateCNPJ(cnpj)) {
      throw new BadRequestException('CNPJ com formato inválido');
    }
    const cnpjTaken = await this.findByCNPJ(cnpj);
    if (cnpjTaken) {
      throw new BadRequestException(
        'CNPJ informado já está sendo usado por outra entidade',
      );
    }
  }

  async findByCNPJ(cnpj: string) {
    return this.customersRepositories.findFirst({
      where: {
        cnpj,
      },
      select: {
        id: true,
      },
    });
  }
}
