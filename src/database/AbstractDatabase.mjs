export class AbstractDatabase {
  constructor() {}

  async create() {
    throw new Error("Not implemented");
  }

  async findOne(findOneRequest) {
    throw new Error("Not implemented");
  }

  async update() {
    throw new Error("Not implemented");
  }

  async deleteById() {
    throw new Error("Not implemented");
  }
}
