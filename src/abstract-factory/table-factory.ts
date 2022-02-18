import smallTable from "./small-table";
import mediumTable from "./medium-table";
import largeTable from "./large-table";
// import ITable from "./table";

export default class TableFactory {
  static getTable(table: string) {
    if (table === "SmallTable") {
      return new smallTable();
    } else if (table === "MediumTable") {
      return new mediumTable();
    } else if (table === "LargeTable") {
      return new largeTable();
    }
  }
}
