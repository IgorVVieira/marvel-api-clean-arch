export interface MarvelRepositoryInterface {
  getHeroes(name: string): Promise<any>;
  findOne(id: number): Promise<any>;
}
