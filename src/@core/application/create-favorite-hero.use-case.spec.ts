import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';
import { MarvelRepositoryInterface } from '../domain/repositories/marvel.repository';
import { CreateFavoriteHeroUseCase } from './create-favorite-hero.use-case';

type MockRepository = Partial<
  Record<keyof FavoriteHeroRepositoryInterface, jest.Mock>
>;
const repositoryMock = () =>
  ({
    insert: jest.fn(),
    favoriteHeroExists: jest.fn(),
  } as MockRepository);

type MockMarvelRepository = Partial<
  Record<keyof MarvelRepositoryInterface, jest.Mock>
>;

const marvelRepositoryMock = () =>
  ({
    findOne: jest.fn(),
  } as MockMarvelRepository);

describe('CreateFavoriteHeroUseCase', () => {
  let createFavoriteHeroUseCase: CreateFavoriteHeroUseCase;
  let repository: MockRepository;
  let marvelRepository: MockMarvelRepository;

  beforeEach(() => {
    repository = repositoryMock();
    marvelRepository = marvelRepositoryMock();
    createFavoriteHeroUseCase = new CreateFavoriteHeroUseCase(
      repository as FavoriteHeroRepositoryInterface,
      marvelRepository as MarvelRepositoryInterface,
    );
  });

  it('should be defined', () => {
    expect(true).toBe(true);
  });

  it('should create a favorite hero', async () => {
    const heroId = 1;
    const hero = {
      id: 1,
      name: 'any_name',
      description: 'any_description',
    };

    repository.favoriteHeroExists.mockResolvedValue(false);
    marvelRepository.findOne.mockResolvedValue(hero);

    const favoriteHero = await createFavoriteHeroUseCase.execute({ heroId });
    expect(favoriteHero).toEqual({
      id: expect.any(String),
      heroId: hero.id,
      hero: {
        id: hero.id,
        name: hero.name,
        description: hero.description,
      },
    });
  });

  it('should not create a favorite hero if it already exists', async () => {
    const heroId = 1;
    const hero = {
      id: 1,
      name: 'any_name',
      description: 'any_description',
    };

    repository.favoriteHeroExists.mockResolvedValue(true);
    marvelRepository.findOne.mockResolvedValue(hero);

    await expect(
      createFavoriteHeroUseCase.execute({ heroId }),
    ).rejects.toThrowError('Hero already exists');
  });
});
