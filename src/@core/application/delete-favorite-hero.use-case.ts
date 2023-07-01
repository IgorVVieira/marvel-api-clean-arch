import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';

export class DeleteFavoriteHeroUseCase {
  constructor(private readonly repository: FavoriteHeroRepositoryInterface) {}

  async execute(favoriteHeroId: number): Promise<boolean> {
    const favoriteHeroExists = await this.repository.favoriteHeroExists(
      favoriteHeroId,
    );
    if (!favoriteHeroExists) {
      throw new Error('Favorite hero not found');
    }
    return await this.repository.delete(favoriteHeroId);
  }
}
