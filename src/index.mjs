import { Api } from "./api/index.mjs";
import { MongoDbDatabase } from "./database/MongoDbDatabase.mjs";
import { RoutePostSession } from "./session/RoutePostSession.mjs";
import { setupGetSessionApi } from "./session/setupGetSessionApi.mjs";

const port = process.env.PORT ?? 3000;
const database = new MongoDbDatabase("mongodb://localhost:27017");
const api = new Api(port);
RoutePostSession(api.getApp(), database);
setupGetSessionApi(api.getApp(), database);
api.start();
