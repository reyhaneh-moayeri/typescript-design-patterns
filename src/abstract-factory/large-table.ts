import Table from "./table";

export default class LargeTable extends Table {
  constructor() {
    super();
    this.name = "LargeTable";
    this.width = 50;
    this.height = 50;
    this.depth = 50;
  }
}
