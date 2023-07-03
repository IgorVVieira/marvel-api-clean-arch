import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { MarvelApi } from '../@core/infra/http/marvel-api';
import { ListHeroesUseCase } from '../@core/application/list-heroes.use-case';
import { MarvelRepositoryInterface } from '../@core/domain/repositories/marvel.repository';

@Module({
  controllers: [HeroesController],
  providers: [
    HeroesService,
    {
      provide: MarvelApi,
      useClass: MarvelApi,
    },
    {
      provide: ListHeroesUseCase,
      useFactory: (repository: MarvelRepositoryInterface) => {
        return new ListHeroesUseCase(repository);
      },
      inject: [MarvelApi],
    },
  ],
})
export class HeroesModule {}
