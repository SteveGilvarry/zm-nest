import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository, In } from 'typeorm';

import { Config as Configuration } from '../../entity/zm';

@Injectable()
export class ConfigurationService extends TypeOrmCrudService<Configuration> {
  constructor(
    @InjectRepository(Configuration)
    public configurationrepository: Repository<Configuration>,
  ) {
    super(configurationrepository);
  }

  /**
   * Get
   * @param name Array of Config Names to retrieve
   */
  public async findByName(name: string[]): Promise<Configuration[]> {
    return await this.configurationrepository.find({
      Name: In(name),
    });
  }
}
