import { FavoriteHero } from '../../domain/entities/favorite-hero.entity';
import { Repository } from 'typeorm';
import { IFavoriteHeroRepository } from '../../domain/repositories/favorite-hero.repository';

export class FavoriteHeroRepository implements IFavoriteHeroRepository {
  constructor(private readonly repository: Repository<FavoriteHero>) { }

  public async findAll(): Promise<FavoriteHero[]> {
    return this.repository.find();
  }

  public async favoriteHeroExists(heroId: number): Promise<boolean> {
    const favoritehero = await this.repository.findOneBy({ heroId });
    return !!favoritehero;
  }

  public async insert(favoriteHero: FavoriteHero): Promise<FavoriteHero> {
    return this.repository.save(favoriteHero);
  }

  public async delete(heroId: number): Promise<boolean> {
    const result = await this.repository.delete({ heroId });
    return Boolean(result.affected);
  }
}
