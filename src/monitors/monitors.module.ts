import { Module } from '@nestjs/common';

import { MonitorsController } from './controllers/monitors/monitors.controller';
import { MonitorsService } from './providers/monitors/monitors.service';

@Module({
  controllers: [MonitorsController],
  providers: [MonitorsService],
})
export class MonitorsModule {}
