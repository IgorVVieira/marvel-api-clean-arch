import { FavoriteHeroesController } from './favorite-heroes.controller';
import { FavoriteHeroesService } from './favorite-heroes.service';
import { CreateFavoriteHeroDto } from './dto/create-favorite-hero.dto';

type ServiceMock = Partial<Record<keyof FavoriteHeroesService, jest.Mock>>;
const serviceMock = () =>
  ({
    create: jest.fn().mockResolvedValue({ id: 'abc123', heroId: 1 }),
    findAll: jest.fn().mockResolvedValue([
      { id: 'abc123', heroId: 1 },
      { id: 'def456', heroId: 2 },
    ]),
    remove: jest.fn().mockResolvedValue(true),
  } as ServiceMock);

describe('FavoriteHeroesController', () => {
  let controller: FavoriteHeroesController;
  let service: ServiceMock;

  beforeEach(() => {
    service = serviceMock();

    controller = new FavoriteHeroesController(
      service as unknown as FavoriteHeroesService,
    );
  });

  it('should create a favorite hero', async () => {
    const createDto: CreateFavoriteHeroDto = { heroId: 1 };

    const result = await controller.create(createDto);

    expect(service.create).toHaveBeenCalledWith(createDto);
    expect(result).toEqual({ id: 'abc123', heroId: 1 });
  });

  it('should find all favorite heroes', async () => {
    const result = await controller.findAll();

    expect(service.findAll).toHaveBeenCalled();
    expect(result).toEqual([
      { id: 'abc123', heroId: 1 },
      { id: 'def456', heroId: 2 },
    ]);
  });

  it('should remove a favorite hero', async () => {
    const heroId = 'abc123';

    const result = await controller.remove(heroId);

    expect(service.remove).toHaveBeenCalledWith(+heroId);
    expect(result).toBe(true);
  });
});
