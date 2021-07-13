import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Config as Configuration } from '../../entity/zm';
import { ConfigurationService } from '../providers';

@ApiTags('configs')
@Crud({
  model: {
    type: Configuration,
  },
})

@Controller('config')
export class ConfigurationController implements CrudController<Configuration> {
  constructor(public service: ConfigurationService) {}
}
