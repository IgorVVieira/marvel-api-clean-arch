import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteHeroesController } from './favorite-heroes.controller';
import { FavoriteHeroesService } from './favorite-heroes.service';

describe('FavoriteHeroesController', () => {
  let controller: FavoriteHeroesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteHeroesController],
      providers: [FavoriteHeroesService],
    }).compile();

    controller = module.get<FavoriteHeroesController>(FavoriteHeroesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
