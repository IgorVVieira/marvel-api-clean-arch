import { FavoriteHero } from '../domain/entities/favorite-hero.entity';
import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';
import { Hero } from '../domain/entities/hero.entity';
import { MarvelRepositoryInterface } from '../domain/repositories/marvel.repository';

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
    private readonly repository: FavoriteHeroRepositoryInterface,
    private readonly marvelRepository: MarvelRepositoryInterface,
  ) {}

  async execute(
    input: CreateFavoriteHeroProps,
  ): Promise<CreateFavoriteHeroOutput> {
    const favoriteHeroExists = await this.favoriteHeroExists(input.heroId);
    if (favoriteHeroExists) {
      throw new Error('Hero already exists');
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
      throw new Error('Hero not found');
    }
    return new Hero(hero.id, hero.name, hero.description);
  }
}
