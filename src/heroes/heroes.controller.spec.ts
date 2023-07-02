import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

type MockHeroesService = Partial<Record<keyof HeroesService, jest.Mock>>;
const mockHeroesService = () =>
  ({
    findAll: jest.fn(),
  } as MockHeroesService);

describe('HeroesController', () => {
  let controller: HeroesController;
  let heroesService: MockHeroesService;

  beforeEach(() => {
    heroesService = mockHeroesService();

    controller = new HeroesController(heroesService as any as HeroesService);
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

      heroesService.findAll.mockResolvedValue(heroes);

      await controller.findAll('Spider');
      expect(heroesService.findAll).toHaveBeenCalled();
    });

    test('should list all heroes with empty name', async () => {
      const heroes = [
        {
          id: 1,
          name: 'Spider',
          description: 'any_description',
        },
      ];

      heroesService.findAll.mockResolvedValue(heroes);

      await controller.findAll('');
      expect(heroesService.findAll).toHaveBeenCalled();
    });
  });
});
