import { IMarvelRepository } from '../domain/repositories/marvel.repository';
import { ListHeroesUseCase } from './list-heroes.use-case';

type MockRepository = Partial<
  Record<keyof IMarvelRepository, jest.Mock>
>;
const repositoryMock = () =>
({
  getHeroes: jest.fn(),
} as MockRepository);

describe('ListHeroesUseCase', () => {
  let listHeroesUseCase: ListHeroesUseCase;
  let repository: MockRepository;

  beforeEach(() => {
    repository = repositoryMock();
    listHeroesUseCase = new ListHeroesUseCase(
      repository as IMarvelRepository,
    );
  });

  it('should list all heroes', async () => {
    const heroes = [
      {
        id: 1,
        name: 'Spider',
        description: 'any_description',
      },
    ];

    repository.getHeroes.mockResolvedValue(heroes);

    await listHeroesUseCase.execute('Spider');
    expect(repository.getHeroes).toHaveBeenCalled();
  });
});
