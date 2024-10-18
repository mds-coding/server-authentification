export class AbstractDatabase {
  constructor() {}

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
