import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Config as Configuration } from '../../entity/zm';
import { ConfigurationService } from '../providers';

@ApiTags('configs')
@Crud({
  model: {
    type: Configuration,
  },
  params: {
    Id: {
      field: 'Id',
      type: 'number',
      primary: true,
    },
  },
})

@Controller('config')
export class ConfigurationController implements CrudController<Configuration> {
  constructor(public service: ConfigurationService) {}

  @Get(findByName())
  async findbyname(@Query('name', new ParseArrayPipe({ items: String, separator: ',' })) name: string[]) {
    return await this.service.findByName(name);
  }

}
