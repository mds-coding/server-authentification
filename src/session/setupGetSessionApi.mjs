import assert from "node:assert";
import { QueryById } from "../database/QueryById.mjs";
import { AbstractDatabase } from "../database/AbstractDatabase.mjs";

export function setupGetSessionApi(app, database) {
  assert.ok(database instanceof AbstractDatabase);

  app.get("/session", async (req, res) => {
    try {
      const body = req.body;
      assert.ok(typeof body === "object", "`body` should be an object");
      assert.ok(body !== null, "`body` should not be null");

      const { sessionId } = body;
      assert.ok(
        typeof sessionId === "string",
        "`sessionId` should be a string",
      );

      const findOneRequest = new QueryById("session", sessionId);
      const sessionDbResponse = await database.findOne(findOneRequest);
      assert.ok(sessionDbResponse, "session not found");

      res.statusCode = 200;
      res.send(sessionDbResponse);
    } catch (e) {
      res.statusCode = 400;
      res.statusMessage = e.message;
      console.error(e);
    } finally {
      res.end();
    }
  });
}
