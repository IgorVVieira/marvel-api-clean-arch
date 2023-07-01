import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoriteHeroesModule } from './favorite-heroes/favorite-heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteHeroSchema } from './@core/infra/db/favorite-hero.schema';

import { join } from 'path';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
