export class DataController {
  static data = {};

  static put(key, value) {
    this.data[key] = value;
  }

  static get(key) {
    return this.data[key];
  }
}
