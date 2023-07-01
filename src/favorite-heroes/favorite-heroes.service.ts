import { Injectable } from '@nestjs/common';
import { CreateFavoriteHeroDto } from './dto/create-favorite-hero.dto';
import { CreateFavoriteHeroUseCase } from '../@core/application/create-favorite-hero.use-case';
import { DeleteFavoriteHeroUseCase } from '../@core/application/delete-favorite-hero.use-case';
import { ListAllFavoriteHeroUseCase } from 'src/@core/application/list-all-favorite-hero.use-case';

@Injectable()
export class FavoriteHeroesService {
  constructor(
    private readonly createFavoriteHeroUseCase: CreateFavoriteHeroUseCase,
    private readonly deleteFavoriteHeroUseCase: DeleteFavoriteHeroUseCase,
    private readonly listAllFavoriteHeroUseCase: ListAllFavoriteHeroUseCase,
  ) {}

  async create(createFavoriteHeroDto: CreateFavoriteHeroDto) {
    return this.createFavoriteHeroUseCase.execute(createFavoriteHeroDto);
  }

  async findAll() {
    return this.listAllFavoriteHeroUseCase.execute();
  }

  remove(id: number) {
    return this.deleteFavoriteHeroUseCase.execute(id);
  }
}
