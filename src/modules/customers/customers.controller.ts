import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dtos/create-customer.dto';
import { UpdateCustomerDTO } from './dtos/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  store(@Body() createCustomerDTO: CreateCustomerDTO) {
    return this.customersService.store(createCustomerDTO);
  }

  @Get()
  index() {
    return this.customersService.index();
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.show(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomerDTO: UpdateCustomerDTO,
  ) {
    return this.customersService.update(id, updateCustomerDTO);
  }
}
