export class AbstractDatabase {
  async create() {
    throw new Error("Not implemented");
  }

  async findOne(queryById) {
    throw new Error("Not implemented");
  }

  async update() {
    throw new Error("Not implemented");
  }

  async deleteById() {
    throw new Error("Not implemented");
  }
}
