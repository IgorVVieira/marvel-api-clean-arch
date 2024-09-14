import { IFavoriteHeroRepository } from '../domain/repositories/favorite-hero.repository';
import { NotFoundException } from '@nestjs/common';

export class DeleteFavoriteHeroUseCase {
  constructor(private readonly repository: IFavoriteHeroRepository) { }

  public async execute(favoriteHeroId: number): Promise<boolean> {
    const favoriteHeroExists = await this.repository.favoriteHeroExists(
      favoriteHeroId,
    );
    if (!favoriteHeroExists) {
      throw new NotFoundException('Favorite hero not found');
    }
    return await this.repository.delete(favoriteHeroId);
  }
}
