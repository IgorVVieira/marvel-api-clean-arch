import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavoriteHeroDto } from './dto/create-favorite-hero.dto';
import { CreateFavoriteHeroUseCase } from '../@core/application/create-favorite-hero.use-case';
import { DeleteFavoriteHeroUseCase } from '../@core/application/delete-favorite-hero.use-case';
import { FavoriteHeroOutput, ListAllFavoriteHeroUseCase } from '../@core/application/list-all-favorite-hero.use-case';

@Injectable()
export class FavoriteHeroesService {
  constructor(
    private readonly createFavoriteHeroUseCase: CreateFavoriteHeroUseCase,
    private readonly deleteFavoriteHeroUseCase: DeleteFavoriteHeroUseCase,
    private readonly listAllFavoriteHeroUseCase: ListAllFavoriteHeroUseCase,
  ) { }

  public async create(createFavoriteHeroDto: CreateFavoriteHeroDto): Promise<CreateFavoriteHeroDto> {
    return this.createFavoriteHeroUseCase.execute(createFavoriteHeroDto);
  }

  public async findAll(): Promise<FavoriteHeroOutput[]> {
    return this.listAllFavoriteHeroUseCase.execute();
  }

  public async remove(id: number): Promise<boolean> {
    return this.deleteFavoriteHeroUseCase.execute(id);
  }
}
