import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CustomerRespolver } from './customer.resolver';
import { CustomersService } from './customers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerRespolver, CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
