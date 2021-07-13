import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Config as Configuration } from '../../entity/zm';

@Injectable()
export class ConfigurationService extends TypeOrmCrudService<Configuration> {
  constructor(@InjectRepository(Configuration) repo: any) {
    super(repo);
  }
}
