import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'node:path';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  database: configService.get('DB_NAME'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASS'),
  port: configService.get('DB_PORT'),
  host: configService.get('DB_HOST'),
  synchronize: true,
  logging: true,
  entities: [join(__dirname + '../../**/*.{js,ts}')],
});
