import { Module } from '@nestjs/common';
import { FavoriteHeroesService } from './favorite-heroes.service';
import { FavoriteHeroesController } from './favorite-heroes.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { FavoriteHeroSchema } from '../@core/infra/db/favorite-hero.schema';
import { FavoriteHeroRepository } from '../@core/infra/db/favorite-hero.repository';
import { FavoriteHero } from '../@core/domain/entities/favorite-hero.entity';
import { CreateFavoriteHeroUseCase } from '../@core/application/create-favorite-hero.use-case';
import { IFavoriteHeroRepository } from '../@core/domain/repositories/favorite-hero.repository';
import { DeleteFavoriteHeroUseCase } from '../@core/application/delete-favorite-hero.use-case';
import { ListAllFavoriteHeroUseCase } from '../@core/application/list-all-favorite-hero.use-case';
import { IMarvelRepository } from '../@core/domain/repositories/marvel.repository';
import { MarvelApi } from '../@core/infra/http/marvel-api';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteHeroSchema])],
  controllers: [FavoriteHeroesController],
  providers: [
    FavoriteHeroesService,
    {
      provide: MarvelApi,
      useClass: MarvelApi,
    },
    {
      provide: FavoriteHeroRepository,
      useFactory: (dataSource: DataSource) => {
        return new FavoriteHeroRepository(
          dataSource.getRepository(FavoriteHero),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateFavoriteHeroUseCase,
      useFactory: (
        repository: IFavoriteHeroRepository,
        marvelRepository: IMarvelRepository,
      ) => {
        return new CreateFavoriteHeroUseCase(repository, marvelRepository);
      },
      inject: [FavoriteHeroRepository, MarvelApi],
    },
    {
      provide: DeleteFavoriteHeroUseCase,
      useFactory: (repository: IFavoriteHeroRepository) => {
        return new DeleteFavoriteHeroUseCase(repository);
      },
      inject: [FavoriteHeroRepository],
    },
    {
      provide: ListAllFavoriteHeroUseCase,
      useFactory: (repository: IFavoriteHeroRepository) => {
        return new ListAllFavoriteHeroUseCase(repository);
      },
      inject: [FavoriteHeroRepository],
    },
  ],
})
export class FavoriteHeroesModule { }
