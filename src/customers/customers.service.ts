import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository, DataSource, UpdateResult, DeleteResult } from 'typeorm';
import { CustomerDto } from './create-customer.dto';

@Injectable()
export class CustomersService extends Repository<Customer> {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
    private datasource: DataSource,
  ) {
    super(Customer, datasource.createEntityManager());
  }

  async createCustomers(customerDto: CustomerDto): Promise<Customer> {
    const { email, firstName, lastName, phoneNumber } = customerDto;

    const customer = new Customer();

    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.email = email;
    customer.phoneNumber = phoneNumber;

    try {
      await customer.save();
    } catch (err) {
      throw new InternalServerErrorException();
    }

    return customer;
  }

  async getAllCustomers(): Promise<Customer[]> {
    return await this.datasource
      .getRepository(Customer)
      .createQueryBuilder('customer')
      .getMany();
  }

  async updateCustomer(
    id: number,
    customerDto: CustomerDto,
  ): Promise<Customer> {
    const { firstName, email, lastName, phoneNumber } = customerDto;

    const firstUser = await this.customerRepo
      .createQueryBuilder()
      .update(Customer)
      .set({
        firstName,
        lastName,
        email,
        phoneNumber,
      })
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute();

    return firstUser.raw[0];
  }

  async deleteCustomer(id: number): Promise<DeleteResult> {
    return await this.datasource
      .createQueryBuilder()
      .delete()
      .from(Customer)
      .where('id = :id', { id })
      .execute();
  }
}
