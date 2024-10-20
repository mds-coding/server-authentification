import assert from "node:assert";
import test from "node:test";
import { Session } from "../../src/session/session.mjs";
import { AbstractEntity } from "../../src/core/AbstractEntity.mjs";

test("Can create a session", async () => {
  const session = new Session("sessionId", "userId");
  assert.ok(session);
  assert.ok(session instanceof AbstractEntity);
  assert.strictEqual(session.getCollection(), "session");
  assert.deepStrictEqual(session.getDataAsJSON(), {
    id: "sessionId",
    userId: "userId",
  });
});
