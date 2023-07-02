import { Hero } from './hero.entity';

describe('Hero', () => {
  test('should create a hero', () => {
    const hero = new Hero(1, 'any_name', 'any_description');

    expect(hero).toEqual({
      id: 1,
      name: 'any_name',
      description: 'any_description',
    });
  });
});
