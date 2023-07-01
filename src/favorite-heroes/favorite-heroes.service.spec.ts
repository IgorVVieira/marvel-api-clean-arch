import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteHeroesService } from './favorite-heroes.service';

describe('FavoriteHeroesService', () => {
  let service: FavoriteHeroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteHeroesService],
    }).compile();

    service = module.get<FavoriteHeroesService>(FavoriteHeroesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
