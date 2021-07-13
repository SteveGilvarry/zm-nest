import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration } from '../../config';
import { Sampletable1 } from '../../entity/sampledb1';
import { ConfigurationService } from '../providers';
import { ConfigurationController } from './configuration.controller';

let moduleRef: TestingModule;
let crud: ConfigurationController;
let idx: number;

beforeAll(async () => {
  // moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
  moduleRef = await Test.createTestingModule({
    imports: [
      /*
      TypeOrmModule.forRoot({
        ...(<ConnectionOptions>(await configuration()).db),
        entities: [],
      }),
      */
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule.forRoot({ load: [configuration] })],
        useFactory: (config: ConfigService) => ({
          ...config.get('db'),
          entities: [Sampletable1],
        }),
        inject: [ConfigService],
      }),
      TypeOrmModule.forFeature([Sampletable1]),
    ],
    controllers: [ConfigurationController],
    providers: [ConfigurationService],
  }).compile();

  crud = moduleRef.get(ConfigurationController);
});

test('create', async () => {
  const result = await crud.create({ title: 'FooBar', content: 'Hello World', tags: ['new'] });
  expect(result).toHaveProperty('id');
  idx = result.id;
});

test('read', async () => {
  expect(await crud.read(idx)).toBeInstanceOf(Sampletable1);
});

test('update', async () => {
  expect(await crud.update(idx, { content: 'Blahblahblah', tags: ['update'] })).toHaveProperty('success');
});

test('delete', async () => {
  const result = await crud.remove(idx);
  expect(result).toHaveProperty('success');
  expect(result.success).toBeTruthy();
});

afterAll(async () => {
  await moduleRef?.close();
});
