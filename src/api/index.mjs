import assert from "node:assert";
import express from "express";

export class Api {
  constructor(port) {
    assert.ok(typeof port === "number");

    this.app = express();
    this.app.use(express.json());
    this.port = port;

    this.app.get("/", (_, res) => {
      res.end();
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }

  getApp() {
    return this.app;
  }
}
