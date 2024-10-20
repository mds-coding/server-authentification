export class AbstractEntity {
  static collection = "defaultCollection";
  id = "defaultId";

  getCollection() {
    throw new Error("Not implemented");
  }

  getDataAsJSON() {
    throw new Error("Not implemented");
  }
}
