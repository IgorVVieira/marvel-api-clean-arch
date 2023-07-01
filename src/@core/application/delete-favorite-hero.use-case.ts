import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';

export class DeleteFavoriteHeroUseCase {
  constructor(
    private readonly favoriteHeroRepository: FavoriteHeroRepositoryInterface,
  ) {}

  async execute(favoriteHeroId: string): Promise<boolean> {
    return await this.favoriteHeroRepository.delete(favoriteHeroId);
  }
}
