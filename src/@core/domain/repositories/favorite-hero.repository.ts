import { FavoriteHero } from '../entities/favorite-hero.entity';

export interface IFavoriteHeroRepository {
  findAll(): Promise<FavoriteHero[]>;
  favoriteHeroExists(heroId: number): Promise<boolean>;
  insert(favoriteHero: FavoriteHero): Promise<FavoriteHero>;
  delete(heroId: number): Promise<boolean>;
}
