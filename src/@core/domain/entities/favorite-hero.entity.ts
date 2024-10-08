import { v4 as uuid } from 'uuid';
import { Hero } from './hero.entity';

export class FavoriteHero {
  private readonly hero: Hero;

  private constructor(
    public readonly id: string,
    public readonly heroId: number,
    hero?: Hero,
  ) {
    this.hero = hero;
  }

  static create(heroId: number, hero?: Hero): FavoriteHero {
    return new FavoriteHero(uuid(), heroId, hero);
  }

  toJson() {
    return {
      id: this.id,
      heroId: this.heroId,
      hero: this.hero,
    };
  }
}
