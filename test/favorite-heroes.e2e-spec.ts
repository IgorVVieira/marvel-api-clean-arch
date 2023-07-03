import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { FavoriteHeroesModule } from '../src/favorite-heroes/favorite-heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteHeroSchema } from '../src/@core/infra/db/favorite-hero.schema';
import { join } from 'path';

describe('FavoriteHeroesController (e2e)', () => {
  let app: INestApplication;
  const heroId = 1009610;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        FavoriteHeroesModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: join(__dirname, '..', 'database', 'test.sqlite'),
          synchronize: true,
          entities: [FavoriteHeroSchema],
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/favorite-heroes (POST)', () => {
    return supertest(app.getHttpServer())
      .post('/favorite-heroes')
      .send({ heroId })
      .expect(201);
  });

  it('/api/favorite-heroes (GET)', () => {
    return supertest(app.getHttpServer())
      .get('/favorite-heroes')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              heroId,
            }),
          ]),
        );
      });
  });

  it('/api/favorite-heroes/:id (DELETE)', () => {
    return supertest(app.getHttpServer())
      .delete(`/favorite-heroes/${heroId}`)
      .expect(204);
  });
});
