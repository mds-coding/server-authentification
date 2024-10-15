export class AbstractEntity {
  static collection = "defaultCollection";
  id = "defaultId";

  constructor() {}

  getCollection() {
    throw new Error("Not implemented");
  }
}
