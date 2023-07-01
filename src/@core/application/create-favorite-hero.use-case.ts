import { FavoriteHero } from '../domain/entities/favorite-hero.entity';
import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';
import { Hero } from '../domain/entities/hero.entity';

interface CreateFavoriteHeroProps {
  heroId: number;
  hero?: Hero;
}

interface CreateFavoriteRouteOutput {
  id: string;
  heroId: number;
}

export class CreateFavoriteHeroUseCase {
  constructor(
    private readonly favoriteHeroRepository: FavoriteHeroRepositoryInterface,
  ) {}

  async execute(
    input: CreateFavoriteHeroProps,
  ): Promise<CreateFavoriteRouteOutput> {
    const favoriteHero = FavoriteHero.create(input.heroId, input.hero);
    await this.favoriteHeroRepository.insert(favoriteHero);

    return favoriteHero.toJson();
  }
}
