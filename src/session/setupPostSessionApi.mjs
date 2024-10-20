import assert from "node:assert";
import { Session } from "./session.mjs";
import { User } from "../core/user.mjs";
import { QueryById } from "../database/QueryById.mjs";
import { randomBytes } from "node:crypto";

export function  setupPostSessionApi(app, absctractDatabase) {
  app.post("/session", async (req, res) => {
    try {
      const body = req.body;
      assert.ok(typeof body === "object", "`body` should be an object");
      assert.ok(body !== null, "`body` should not be null");

      const { userId, password } = body;
      assert.ok(typeof userId === "string", "`userId` should be a string");
      assert.ok(typeof password === "string", "`password` should be a string");

      const findOneRequest = new QueryById("user", userId);
      const userObject = await absctractDatabase.findOne(findOneRequest);
      const user = User.fromObject(userObject);
      const isValid = await user.checkPassword(password);
      assert.ok(isValid, "invalid credentials");

      const newSession = new Session(randomBytes(64).toString("hex"), user.id);
      absctractDatabase.create(newSession);

      res.setHeader("Set-Cookie", `sessionId=${newSession.id};`);
      res.statusCode = 200;
    } catch (e) {
      res.statusCode = 403;
      res.statusMessage = e.message;
      console.error(e);
    } finally {
      res.end();
    }
  });
}
