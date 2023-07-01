import { FavoriteHero } from '../entities/favorite-hero.entity';

export interface FavoriteHeroRepositoryInterface {
  insert(favoriteHero: FavoriteHero): Promise<FavoriteHero>;
  delete(favoriteHeroId: string): Promise<boolean>;
  findAll(): Promise<FavoriteHero[]>;
}
