import { MarvelRepositoryInterface } from '../../../domain/repositories/marvel.repository';
import { api } from './api';

export class MarvelApi implements MarvelRepositoryInterface {
  async getHeroes(name: string): Promise<any> {
    const { data } = await api.get('characters', {
      params: {
        nameStartsWith: name,
      },
    });

    return data.data.results;
  }

  async findOne(id: number): Promise<any> {
    try {
      const { data } = await api.get(`characters/${id}`);
      return data.data.results[0];
    } catch (error) {
      throw new Error('Hero not found');
    }
  }
}
