import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerType } from './customer.type';
import { CustomerDto } from './create-customer.dto';
import { CustomersService } from './customers.service';

@Resolver((of) => CustomerType)
export class CustomerRespolver {
  constructor(private customerService: CustomersService) {}
  @Query((returns) => [CustomerType])
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Mutation((returns) => CustomerType)
  createCustomer(@Args('createCustomerDto') createCustomerDto: CustomerDto) {
    return this.customerService.createCustomers(createCustomerDto);
  }

  @Mutation((returns) => CustomerType)
  updateCustomerInfo(
    @Args('id') id: number,
    @Args('updateCustomerDto') customerDto: CustomerDto,
  ) {
    return this.customerService.updateCustomer(id, customerDto);
  }

  @Mutation((returns) => String)
  deleteCustomer(@Args('id') id: number) {
    const deletec = this.customerService.deleteCustomer(id);
    return 'Successfully Deleted Customer';
  }
}
