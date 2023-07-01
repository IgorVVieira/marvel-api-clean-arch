import { EntitySchema } from 'typeorm';
import { FavoriteHero } from '../../domain/entities/favorite-hero.entity';

export const FavoriteHeroSchema = new EntitySchema({
  name: 'favorite_heroes',
  target: FavoriteHero,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    heroId: {
      type: 'int',
      unique: true,
    },
    created_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
    updated_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
});
