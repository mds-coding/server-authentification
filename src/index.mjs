import { Api } from "./api/index.mjs";
import { MongoDbDatabase } from "./database/MongoDbDatabase.mjs";
import { setupGetSessionApi } from "./session/setupGetSessionApi.mjs";
import { setupPostSessionApi } from "./session/setupPostSessionApi.mjs";
import { setupDeleteSessionApi } from "./session/setupDeleteSessionApi.mjs";

const port = process.env.PORT ?? 3000;
const database = new MongoDbDatabase(
  process.env.MONGODB ?? "mongodb://localhost:27017",
);
const api = new Api(port);
setupGetSessionApi(api.getApp(), database);
setupPostSessionApi(api.getApp(), database);
setupDeleteSessionApi(api.getApp(), database);
api.start();
