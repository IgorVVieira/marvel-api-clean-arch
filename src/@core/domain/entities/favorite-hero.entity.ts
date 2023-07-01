import { v4 as uuid } from 'uuid';
import { Hero } from './hero.entity';

export class FavoriteHero {
  private hero: Hero;

  constructor(private id: string, private heroId: number, hero?: Hero) {
    this.hero = hero;
  }

  getId(): string {
    return this.id;
  }

  getHeroId(): number {
    return this.heroId;
  }

  getHero(): Hero {
    return this.hero;
  }

  static create(heroId: number, hero?: Hero): FavoriteHero {
    return new FavoriteHero(uuid(), heroId, hero);
  }

  toJson() {
    return {
      id: this.id,
      heroId: this.heroId,
    };
  }
}
