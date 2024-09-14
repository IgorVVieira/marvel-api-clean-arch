import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { FavoriteHeroesService } from './favorite-heroes.service';
import { CreateFavoriteHeroDto } from './dto/create-favorite-hero.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('favorite-heroes')
@Controller('favorite-heroes')
export class FavoriteHeroesController {
  public constructor(private readonly favoriteHeroesService: FavoriteHeroesService) { }

  @Post()
  public async create(@Body() createFavoriteHeroDto: CreateFavoriteHeroDto) {
    return this.favoriteHeroesService.create(createFavoriteHeroDto);
  }

  @Get()
  public async findAll() {
    return this.favoriteHeroesService.findAll();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async remove(@Param('id') id: string) {
    return this.favoriteHeroesService.remove(+id);
  }
}
