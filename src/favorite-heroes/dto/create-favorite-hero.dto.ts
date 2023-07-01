import { IsNumber } from 'class-validator';

export class CreateFavoriteHeroDto {
  @IsNumber()
  heroId: number;
}
