import { demention } from "./demention";

export interface ITable {
  name: string;
  width: number;
  height: number;
  depth: number;
  getDemention(): demention;
}
export default class Table implements ITable {
  name = "";
  width = 0;
  height = 0;
  depth = 0;
  createTable(): ITable {
    return this;
  }
  getDemention(): demention {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth,
    };
  }
}
