import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { HeroesModule } from '../src/heroes/heroes.module';

describe('HeroesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HeroesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/heroes (GET)', () => {
    return supertest(app.getHttpServer()).get('/heroes').expect(200);
  });
});
