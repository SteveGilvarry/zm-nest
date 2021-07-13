import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { ConnectionOptions } from 'typeorm';

import { configuration } from '../../config';
import { ConfigurationService } from './configuration.service';

let moduleRef: TestingModule;
let crud: ConfigurationService;
let idx: number;

beforeAll(async () => {
  moduleRef = await Test.createTestingModule({
    imports: [
      TypeOrmModule.forRoot({
        ...(<ConnectionOptions>(await configuration()).db),
        entities: [Sampletable1],
      }),
      TypeOrmModule.forFeature([Sampletable1]),
    ],
    providers: [ConfigurationService],
  }).compile();

  crud = moduleRef.get(ConfigurationService);
});

test('create', async () => {
  const result = await crud.create({ title: 'FooBar', content: 'Hello World' });
  expect(result).toHaveProperty('id');
  idx = result.id;
});

test('read', async () => {
  expect(await crud.read(idx)).toBeInstanceOf(Sampletable1);
});

test('update', async () => {
  expect(await crud.update(idx, { title: 'Blahblahblah' })).toHaveProperty('affected');
});

test('delete', async () => {
  const result = await crud.remove(idx);
  expect(result).toHaveProperty('affected');
  expect(result.affected).toBe(1);
});

afterAll(async () => {
  await moduleRef?.close();
});
