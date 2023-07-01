import { FavoriteHero } from '../domain/entities/favorite-hero.entity';
import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';
import { Hero } from '../domain/entities/hero.entity';

type CreateFavoriteHeroProps = {
  heroId: number;
  hero?: Hero;
};

type CreateFavoriteHeroOutput = {
  id: string;
  heroId: number;
};

export class CreateFavoriteHeroUseCase {
  constructor(
    private readonly favoriteHeroRepository: FavoriteHeroRepositoryInterface,
  ) {}

  async execute(
    input: CreateFavoriteHeroProps,
  ): Promise<CreateFavoriteHeroOutput> {
    const favoriteHero = FavoriteHero.create(input.heroId, input.hero);
    await this.favoriteHeroRepository.insert(favoriteHero);

    return favoriteHero.toJson();
  }
}
