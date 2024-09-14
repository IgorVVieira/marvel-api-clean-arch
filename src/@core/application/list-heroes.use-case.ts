import { Hero } from '../domain/entities/hero.entity';
import { IMarvelRepository } from '../domain/repositories/marvel.repository';

export class ListHeroesUseCase {
  public constructor(private readonly marvelRepository: IMarvelRepository) { }

  public async execute(name?: string, limit?: number): Promise<Hero[]> {
    try {
      const heroes = await this.marvelRepository.getHeroes(name, limit);
      return heroes.map(
        (hero: any) => new Hero(hero.id, hero.name, hero.description),
      );
    } catch (error) {
      throw new Error('Failed to list heroes');
    }
  }
}
