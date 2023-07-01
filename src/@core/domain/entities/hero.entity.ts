export class Hero {
  constructor(
    private id: number,
    private name: string,
    private description: string,
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }
}
