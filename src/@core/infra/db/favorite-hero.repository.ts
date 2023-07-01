import { FavoriteHero } from '../../domain/entities/favorite-hero.entity';
import { Repository } from 'typeorm';
import { FavoriteHeroRepositoryInterface } from '../../domain/repositories/favorite-hero.repository';

export class FavoriteHeroRepository implements FavoriteHeroRepositoryInterface {
  constructor(private readonly repository: Repository<FavoriteHero>) {}

  async insert(favoriteHero: FavoriteHero): Promise<FavoriteHero> {
    return await this.repository.save(favoriteHero);
  }

  async delete(favoriteHeroId: string): Promise<boolean> {
    const result = await this.repository.delete(favoriteHeroId);
    return result.affected === 1;
  }

  async findAll(): Promise<FavoriteHero[]> {
    return await this.repository.find();
  }
}
