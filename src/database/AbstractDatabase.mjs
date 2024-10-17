export class AbstractDatabase {
  constructor() {
    throw new Error("Can't instanciate AbstractDatabase");
  }

  async create() {
    throw new Error("Not implemented");
  }

  async findOne() {
    throw new Error("Not implemented");
  }

  async update() {
    throw new Error("Not implemented");
  }
}
