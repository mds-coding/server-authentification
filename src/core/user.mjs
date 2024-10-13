import bcrypt from "bcrypt";
import assert from "node:assert";

export class User {
  constructor(id, hashedPassword) {
    assert.equal(typeof id, "string");
    assert.equal(typeof hashedPassword, "string");
    this.id = id;
    this.hashedPassword = hashedPassword;
  }

  static async create(id, plainPassword) {
    try {
      const hashedPassword = await bcrypt.hash(plainPassword, 10);
      return new User(id, hashedPassword);
    } catch (e) {
      throw e;
    }
  }

  async checkPassword(plainPassword) {
    try {
      return await bcrypt.compare(plainPassword, this.hashedPassword);
    } catch (e) {
      throw e;
    }
  }
}
