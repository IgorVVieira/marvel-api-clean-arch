import { Hero } from '../domain/entities/hero.entity';
import { MarvelRepositoryInterface } from '../domain/repositories/marvel.repository';

export class ListHeroesUseCase {
  constructor(private readonly marvelRepository: MarvelRepositoryInterface) {}

  async execute(name: string): Promise<Hero[]> {
    try {
      const heroes = await this.marvelRepository.getHeroes(name);
      return heroes.map(
        (hero: any) => new Hero(hero.id, hero.name, hero.description),
      );
    } catch (error) {
      throw new Error('Failed to list heroes');
    }
  }
}
