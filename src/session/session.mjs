import assert from "node:assert";
import { AbstractEntity } from "../core/AbstractEntity.mjs";

export class Session extends AbstractEntity {
  static collection = "session";

  constructor(id, userId) {
    super();
    assert.ok(typeof id === "string", "`id` should be a string");
    assert.ok(typeof userId === "string", "`userId` should be a string");
    this.id = id;
    this.userId = userId;
  }

  getCollection() {
    return Session.collection;
  }

  getDataAsJSON() {
    return {
      id: this.id,
      userId: this.userId,
    };
  }
}
