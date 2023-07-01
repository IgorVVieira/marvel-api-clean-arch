import axios from 'axios';
import { MarvelRepositoryInterface } from '../../../domain/repositories/marvel.repository';

export class MarvelApi implements MarvelRepositoryInterface {
  async getHeroes(): Promise<any> {
    const { data } = await axios.get(process.env.MARVEL_API_URL, {
      params: {
        apikey: process.env.MARVEL_PRIVATE_KEY,
      },
    });

    return data.data.results;
  }
}
