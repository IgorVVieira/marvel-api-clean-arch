export interface MarvelRepositoryInterface {
  getHeroes(name?: string, limit?: number): Promise<any>;
  findOne(id: number): Promise<any>;
}
