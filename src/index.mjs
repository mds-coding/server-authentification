import { Api } from "./api/index.mjs";

const port = process.env.PORT ?? 3000;

const api = new Api(port);
api.start();
