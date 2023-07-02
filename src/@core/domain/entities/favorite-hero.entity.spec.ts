import { FavoriteHero } from './favorite-hero.entity';
import { Hero } from './hero.entity';

describe('FavoriteHero', () => {
  test('should create a favorite hero', () => {
    const heroId = 1;
    const hero = new Hero(1, 'any_name', 'any_description');
    const favoriteHero = FavoriteHero.create(heroId, hero);

    expect(favoriteHero).toEqual({
      id: expect.any(String),
      heroId,
      hero,
    });
  });

  test('should create a favorite hero without hero', () => {
    const heroId = 1;
    const favoriteHero = FavoriteHero.create(heroId);

    expect(favoriteHero).toEqual({
      id: expect.any(String),
      heroId,
      hero: undefined,
    });
  });

  test('should return a json', () => {
    const heroId = 1;
    const hero = new Hero(1, 'any_name', 'any_description');
    const favoriteHero = FavoriteHero.create(heroId, hero);

    expect(favoriteHero.toJson()).toEqual({
      id: expect.any(String),
      heroId,
      hero,
    });
  });
});
