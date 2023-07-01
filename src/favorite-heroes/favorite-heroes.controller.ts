import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavoriteHeroesService } from './favorite-heroes.service';
import { CreateFavoriteHeroDto } from './dto/create-favorite-hero.dto';

@Controller('favorite-heroes')
export class FavoriteHeroesController {
  constructor(private readonly favoriteHeroesService: FavoriteHeroesService) {}

  @Post()
  create(@Body() createFavoriteHeroDto: CreateFavoriteHeroDto) {
    return this.favoriteHeroesService.create(createFavoriteHeroDto);
  }

  @Get()
  findAll() {
    return this.favoriteHeroesService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteHeroesService.remove(+id);
  }
}
