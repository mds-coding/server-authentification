import assert from "node:assert";
import { AbstractDatabase } from "./AbstractDatabase.mjs";
import { AbstractEntity } from "../core/AbstractEntity.mjs";

export class MongoDbDatabase extends AbstractDatabase {
  constructor() {
    this.uri = process.env.MONGODB_URI;
    this.client = new MongoClient(uri);
    this.database = this.client.db("authentification");
    this.collection = {};
    this.collection["user"] = this.database.collection("user");
    this.collection["session"] = this.database.collection("session");
  }

  async create(abstractEntity) {
    try {
      assert.ok(
        abstractEntity instanceof AbstractEntity,
        "Should be an instance of AbstractEntity",
      );

      const collection = this.collection[abstractEntity.getCollection()];
      assert.ok(collection, "Collection should be defined");

      const doc = abstractEntity.getDataAsJSON();
      const entity = await collection.insertOne(doc);
      return entity;
    } catch (e) {
      throw e;
    }
  }

  async findOne(abstractEntity) {
    try {
      assert.ok(
        abstractEntity instanceof AbstractEntity,
        "Should be an instance of AbstractEntity",
      );

      const collection = this.collection[abstractEntity.getCollection()];
      assert.ok(collection, "Collection should be defined");

      const query = { id: abstractEntity.id };
      const entity = await collection.findOne(query);
      return entity;
    } catch (e) {
      throw e;
    }
  }

  async update(abstractEntity) {
    try {
      assert.ok(
        abstractEntity instanceof AbstractEntity,
        "Should be an instance of AbstractEntity",
      );

      const collection = this.collection[abstractEntity.getCollection()];
      assert.ok(collection, "Collection should be defined");

      const query = { id: abstractEntity.id };
      const doc = abstractEntity.getDataAsJSON();
      const entity = await collection.replaceOne(query, doc);
      return entity;
    } catch (e) {
      throw e;
    }
  }
}
