import { Controller, Get, Query } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  findAll(@Query('name') name: string) {
    return this.heroesService.findAll(name);
  }
}
