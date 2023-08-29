import { Controller, Post, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dtos/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  store(@Body() createCustomerDTO: CreateCustomerDTO) {
    return this.customersService.store(createCustomerDTO);
  }
}
