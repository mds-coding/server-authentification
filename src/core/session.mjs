import assert from "node:assert";

export class Session {
  id;
  userId;

  constructor(id, userId) {
    assert.equal(typeof id, "string");
    assert.equal(typeof userId, "string");
    this.id = id;
    this.userId = userId;
  }
}
