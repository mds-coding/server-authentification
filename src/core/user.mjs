import bcrypt from "bcrypt";
import assert from "node:assert";
import { AbstractEntity } from "./AbstractEntity.mjs";

const SALT_ROUNDS = 10;

export class User extends AbstractEntity {
  static collection = "user";

  constructor(id, hashedPassword) {
    super();
    assert.ok(typeof id === "string", "`id` should be a string");
    assert.ok(
      typeof hashedPassword === "string",
      "`hashedPassword` should be a string",
    );
    this.id = id;
    this.hashedPassword = hashedPassword;
  }

  static async create(id, plainPassword) {
    try {
      const hashedPassword = await bcrypt.hash(plainPassword, SALT_ROUNDS);
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

  getCollection() {
    return User.collection;
  }

  getDataAsJSON() {
    return {
      id: this.id,
      hashedPassword: this.hashedPassword,
    };
  }
}
