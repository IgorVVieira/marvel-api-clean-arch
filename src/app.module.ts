import { Module } from '@nestjs/common';
import { FavoriteHeroesModule } from './favorite-heroes/favorite-heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteHeroSchema } from './@core/infra/db/favorite-hero.schema';

import { join } from 'path';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    FavoriteHeroesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'database.sqlite'),
      // database: ':memory:',
      synchronize: true,
      entities: [FavoriteHeroSchema],
    }),
    HeroesModule,
  ],
})
export class AppModule {}
