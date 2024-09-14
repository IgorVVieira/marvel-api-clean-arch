import { IFavoriteHeroRepository } from '../domain/repositories/favorite-hero.repository';

export type FavoriteHeroOutput = {
  id: string;
  heroId: number;
};

export class ListAllFavoriteHeroUseCase {
  constructor(
    private readonly favoriteHeroRepository: IFavoriteHeroRepository,
  ) { }

  public async execute(): Promise<FavoriteHeroOutput[]> {
    const favoriteHeroes = await this.favoriteHeroRepository.findAll();
    return favoriteHeroes.map((favoriteHero) => favoriteHero.toJson());
  }
}
