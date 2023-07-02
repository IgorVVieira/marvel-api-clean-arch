import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavoriteHeroDto } from './dto/create-favorite-hero.dto';
import { CreateFavoriteHeroUseCase } from '../@core/application/create-favorite-hero.use-case';
import { DeleteFavoriteHeroUseCase } from '../@core/application/delete-favorite-hero.use-case';
import { ListAllFavoriteHeroUseCase } from '../@core/application/list-all-favorite-hero.use-case';

@Injectable()
export class FavoriteHeroesService {
  constructor(
    private readonly createFavoriteHeroUseCase: CreateFavoriteHeroUseCase,
    private readonly deleteFavoriteHeroUseCase: DeleteFavoriteHeroUseCase,
    private readonly listAllFavoriteHeroUseCase: ListAllFavoriteHeroUseCase,
  ) {}

  async create(createFavoriteHeroDto: CreateFavoriteHeroDto) {
    try {
      return this.createFavoriteHeroUseCase.execute(createFavoriteHeroDto);
    } catch (error) {
      if (error.message === 'Hero not found') {
        throw new NotFoundException('Hero not found');
      }
    }
  }

  async findAll() {
    return this.listAllFavoriteHeroUseCase.execute();
  }

  remove(id: number) {
    try {
      return this.deleteFavoriteHeroUseCase.execute(id);
    } catch (error) {
      if (error.message === 'Favorite hero not found') {
        throw new NotFoundException('Favorite hero not found');
      }
    }
  }
}
