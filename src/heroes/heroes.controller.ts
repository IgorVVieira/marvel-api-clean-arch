import { Controller, Get, Query } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('heores')
@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @ApiQuery({
    name: 'nameStartsWith',
    required: false,
    type: String,
    description: 'Filter by hero name',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit of heroes (default: 20)',
  })
  @Get()
  findAll(@Query('nameStartsWith') name?: string, @Query('limit') limit = 20) {
    return this.heroesService.findAll(name, limit);
  }
}
