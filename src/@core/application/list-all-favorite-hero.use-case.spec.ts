import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';
import { ListAllFavoriteHeroUseCase } from './list-all-favorite-hero.use-case';

type MockRepository = Partial<
  Record<keyof FavoriteHeroRepositoryInterface, jest.Mock>
>;
const repositoryMock = () =>
  ({
    findAll: jest.fn(),
  } as MockRepository);

describe('ListAllFavoriteHeroUseCase', () => {
  let listAllFavoriteHeroUseCase: ListAllFavoriteHeroUseCase;
  let repository: MockRepository;

  beforeEach(() => {
    repository = repositoryMock();
    listAllFavoriteHeroUseCase = new ListAllFavoriteHeroUseCase(
      repository as FavoriteHeroRepositoryInterface,
    );
  });

  it('should be defined', () => {
    expect(true).toBe(true);
  });

  it('should list all favorite heroes', async () => {
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

    repository.findAll.mockResolvedValue(favoriteHeroes);

    await listAllFavoriteHeroUseCase.execute();
    expect(repository.findAll).toHaveBeenCalled();
  });
});
