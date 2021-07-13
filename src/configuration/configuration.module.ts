import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Config } from '../entity/zm';
import * as controllers from './controllers';
import * as providers from './providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // ...Object.values(tables)
      Config,
    ]),
  ],
  controllers: Object.values(controllers),
  providers: Object.values(providers),
})
export class ConfigurationModule {}
