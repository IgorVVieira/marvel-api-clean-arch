import { FavoriteHero } from '../domain/entities/favorite-hero.entity';
import { IFavoriteHeroRepository } from '../domain/repositories/favorite-hero.repository';
import { Hero } from '../domain/entities/hero.entity';
import { IMarvelRepository } from '../domain/repositories/marvel.repository';
import { NotFoundException } from '@nestjs/common';

type CreateFavoriteHeroProps = {
  heroId: number;
};

type CreateFavoriteHeroOutput = {
  id: string;
  heroId: number;
  hero: Hero;
};

type HeroOutput = {
  id: number;
  name: string;
  description: string;
};

export class CreateFavoriteHeroUseCase {
  constructor(
    private readonly repository: IFavoriteHeroRepository,
    private readonly marvelRepository: IMarvelRepository,
  ) { }

  async execute(
    input: CreateFavoriteHeroProps,
  ): Promise<CreateFavoriteHeroOutput> {
    const favoriteHeroExists = await this.favoriteHeroExists(input.heroId);
    if (favoriteHeroExists) {
      throw new NotFoundException('Hero already exists');
    }

    const hero = await this.getHero(input.heroId);

    const favoriteHero = FavoriteHero.create(input.heroId, hero);
    await this.repository.insert(favoriteHero);

    return favoriteHero.toJson();
  }

  private favoriteHeroExists(heroId: number): Promise<boolean> {
    return this.repository.favoriteHeroExists(heroId);
  }

  private async getHero(heroId: number): Promise<HeroOutput> {
    const hero = await this.marvelRepository.findOne(heroId);
    if (!hero) {
      throw new NotFoundException('Hero not found');
    }
    return new Hero(hero.id, hero.name, hero.description);
  }
}
