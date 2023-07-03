import { Injectable, NotFoundException } from '@nestjs/common';
import { ListHeroesUseCase } from '../@core/application/list-heroes.use-case';

@Injectable()
export class HeroesService {
  constructor(private readonly listHeroesUseCase: ListHeroesUseCase) {}

  async findAll(name?: string, limit?: number) {
    try {
      return await this.listHeroesUseCase.execute(name, limit);
    } catch (error) {
      if (error.message === 'Heroes not found') {
        throw new NotFoundException('Heroes not found');
      }
    }
  }
}
