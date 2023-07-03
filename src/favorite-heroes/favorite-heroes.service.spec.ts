import { DeleteFavoriteHeroUseCase } from 'src/@core/application/delete-favorite-hero.use-case';
import { CreateFavoriteHeroUseCase } from '../@core/application/create-favorite-hero.use-case';
import { FavoriteHeroesService } from './favorite-heroes.service';
import { ListAllFavoriteHeroUseCase } from 'src/@core/application/list-all-favorite-hero.use-case';

type MockCreateFavoriteHeroUseCase = Partial<
  Record<keyof CreateFavoriteHeroUseCase, jest.Mock>
>;
const createFavoriteHeroUseCaseMock = () =>
  ({
    execute: jest.fn(),
  } as MockCreateFavoriteHeroUseCase);

type MockDeleteFavoriteHeroUseCase = Partial<
  Record<keyof DeleteFavoriteHeroUseCase, jest.Mock>
>;
const deleteFavoriteHeroUseCaseMock = () =>
  ({
    execute: jest.fn(),
  } as MockDeleteFavoriteHeroUseCase);

type MockListAllFavoriteHeroesUseCase = Partial<
  Record<keyof ListAllFavoriteHeroUseCase, jest.Mock>
>;
const listAllFavoriteHeroUseCaseMock = () =>
  ({
    execute: jest.fn(),
  } as MockListAllFavoriteHeroesUseCase);

describe('FavoriteHeroesService', () => {
  let service: FavoriteHeroesService;
  let createFavoriteHeroUseCase: MockCreateFavoriteHeroUseCase;
  let deleteFavoriteHeroUseCase: MockDeleteFavoriteHeroUseCase;
  let listAllFavoriteHeroUseCase: MockListAllFavoriteHeroesUseCase;

  beforeEach(() => {
    createFavoriteHeroUseCase = createFavoriteHeroUseCaseMock();
    deleteFavoriteHeroUseCase = deleteFavoriteHeroUseCaseMock();
    listAllFavoriteHeroUseCase = listAllFavoriteHeroUseCaseMock();

    service = new FavoriteHeroesService(
      createFavoriteHeroUseCase as any as CreateFavoriteHeroUseCase,
      deleteFavoriteHeroUseCase as any as DeleteFavoriteHeroUseCase,
      listAllFavoriteHeroUseCase as any as ListAllFavoriteHeroUseCase,
    );
  });

  describe('create', () => {
    test('should create a favorite hero', async () => {
      const heroId = 1;
      const hero = {
        id: 1,
        name: 'any_name',
        description: 'any_description',
      };

      createFavoriteHeroUseCase.execute.mockResolvedValue(hero);

      const favoriteHero = await service.create({ heroId });
      expect(favoriteHero).toEqual(hero);
    });

    test('should not create a favorite hero if it already exists', async () => {
      const heroId = 1;

      createFavoriteHeroUseCase.execute.mockRejectedValue(
        new Error('Favorite hero already exists'),
      );

      await expect(service.create({ heroId })).rejects.toThrow(
        'Favorite hero already exists',
      );
    });

    test('should not create a favorite hero if it does not exist in Marvel API', async () => {
      const heroId = 1;

      createFavoriteHeroUseCase.execute.mockRejectedValue(
        new Error('Hero not found'),
      );

      await expect(service.create({ heroId })).rejects.toThrow(
        'Hero not found',
      );
    });
  });

  describe('findAll', () => {
    test('should list all favorite heroes', async () => {
      const favoriteHeroes = [
        {
          id: 'any_id',
          heroId: 1,
          hero: {
            id: 1,
            name: 'any_name',
            description: 'any_description',
          },
          toJson: jest.fn(),
        },
      ];

      listAllFavoriteHeroUseCase.execute.mockResolvedValue(favoriteHeroes);

      await service.findAll();
      expect(listAllFavoriteHeroUseCase.execute).toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    test('should remove a favorite hero', async () => {
      const heroId = 1;

      deleteFavoriteHeroUseCase.execute.mockResolvedValue(true);

      const favoriteHero = await service.remove(heroId);
      expect(favoriteHero).toEqual(true);
    });

    test('should not remove a favorite hero if it does not exist', async () => {
      const heroId = 1;

      deleteFavoriteHeroUseCase.execute.mockRejectedValue(
        new Error('Favorite hero not found'),
      );

      await expect(service.remove(heroId)).rejects.toThrow(
        'Favorite hero not found',
      );
    });
  });
});
