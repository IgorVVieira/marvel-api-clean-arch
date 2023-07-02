import { ListHeroesUseCase } from 'src/@core/application/list-heroes.use-case';
import { HeroesService } from './heroes.service';

type MockListHeroesUseCase = Partial<
  Record<keyof ListHeroesUseCase, jest.Mock>
>;
const mockListHeroesUseCase = () =>
  ({
    execute: jest.fn(),
  } as MockListHeroesUseCase);

describe('HeroesService', () => {
  let service: HeroesService;
  let listHeroesUseCase: MockListHeroesUseCase;

  beforeEach(() => {
    listHeroesUseCase = mockListHeroesUseCase();

    service = new HeroesService(listHeroesUseCase as any as ListHeroesUseCase);
  });

  describe('findAll', () => {
    test('should list all heroes', async () => {
      const heroes = [
        {
          id: 1,
          name: 'Spider',
          description: 'any_description',
        },
      ];

      listHeroesUseCase.execute.mockResolvedValue(heroes);

      await service.findAll('Spider');
      expect(listHeroesUseCase.execute).toHaveBeenCalled();
    });

    test('should list all heroes with empty name', async () => {
      const heroes = [
        {
          id: 1,
          name: 'Spider',
          description: 'any_description',
        },
      ];

      listHeroesUseCase.execute.mockResolvedValue(heroes);

      await service.findAll('');
      expect(listHeroesUseCase.execute).toHaveBeenCalled();
    });
  });
});
