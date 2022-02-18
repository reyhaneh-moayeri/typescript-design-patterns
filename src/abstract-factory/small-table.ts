import Table from "./table";

export default class SmallTable extends Table {
  constructor() {
    super();
    this.name = "SmallTable";
    this.width = 10;
    this.height = 10;
    this.depth = 10;
  }
}
