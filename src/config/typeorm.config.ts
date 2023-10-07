import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeormOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'Lion@081',
  synchronize: true,
  database: 'repairmanagement',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};

export default typeormOptions;
