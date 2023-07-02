import { FavoriteHeroRepositoryInterface } from '../domain/repositories/favorite-hero.repository';
import { DeleteFavoriteHeroUseCase } from './delete-favorite-hero.use-case';

type MockRepository = Partial<
  Record<keyof FavoriteHeroRepositoryInterface, jest.Mock>
>;
const repositoryMock = () =>
  ({
    delete: jest.fn(),
    favoriteHeroExists: jest.fn(),
  } as MockRepository);

describe('DeleteFavoriteHeroUseCase', () => {
  let deleteFavoriteHeroUseCase: DeleteFavoriteHeroUseCase;
  let repository: MockRepository;

  beforeEach(() => {
    repository = repositoryMock();
    deleteFavoriteHeroUseCase = new DeleteFavoriteHeroUseCase(
      repository as FavoriteHeroRepositoryInterface,
    );
  });

  it('should be defined', () => {
    expect(true).toBe(true);
  });

  it('should delete a favorite hero', async () => {
    const favoriteHeroId = 1;

    repository.favoriteHeroExists.mockResolvedValue(true);
    repository.delete.mockResolvedValue(true);

    const favoriteHero = await deleteFavoriteHeroUseCase.execute(
      favoriteHeroId,
    );
    expect(favoriteHero).toEqual(true);
  });

  it('should not delete a favorite hero if it does not exist', async () => {
    const favoriteHeroId = 1;

    repository.favoriteHeroExists.mockResolvedValue(false);

    await expect(
      deleteFavoriteHeroUseCase.execute(favoriteHeroId),
    ).rejects.toThrow('Favorite hero not found');
  });
});
