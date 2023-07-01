import { Injectable } from '@nestjs/common';

import { ListHeroesUseCase } from '../@core/application/list-heroes.use-case';

@Injectable()
export class HeroesService {
  constructor(private readonly listHeroesUseCase: ListHeroesUseCase) {}

  async findAll(name: string) {
    return await this.listHeroesUseCase.execute(name);
  }
}
