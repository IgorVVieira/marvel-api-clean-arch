import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateFavoriteHeroDto {
  @ApiProperty({
    description: 'The id of the hero on marvel API',
    example: 1009610,
    type: Number,
  })
  @IsNumber()
  heroId: number;
}
