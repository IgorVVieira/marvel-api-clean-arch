import { Module } from '@nestjs/common';
import { FavoriteHeroesModule } from './favorite-heroes/favorite-heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteHeroSchema } from './@core/infra/db/favorite-hero.schema';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    FavoriteHeroesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [FavoriteHeroSchema],
    }),
    HeroesModule,
  ],
})
export class AppModule {}
