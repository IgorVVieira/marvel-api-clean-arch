import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';

type FavoriteHeroOutput = {
  id: string;
  heroId: number;
};

export class ListAllFavoriteHeroUseCase {
  constructor(
    private readonly favoriteHeroRepository: FavoriteHeroRepositoryInterface,
  ) {}

  async execute(): Promise<FavoriteHeroOutput[]> {
    const favoriteHeroes = await this.favoriteHeroRepository.findAll();
    return favoriteHeroes.map((favoriteHero) => favoriteHero.toJson());
  }
}
