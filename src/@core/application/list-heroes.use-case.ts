import { Hero } from '../domain/entities/hero.entity';
import { MarvelRepositoryInterface } from '../domain/repositories/marvel.repository';

export class ListHeroesUseCase {
  constructor(private readonly marvelRepository: MarvelRepositoryInterface) {}

  async execute(): Promise<Hero[]> {
    const heroes = await this.marvelRepository.getHeroes();
    return heroes.map(
      (hero: any) => new Hero(hero.id, hero.name, hero.description),
    );
  }
}
