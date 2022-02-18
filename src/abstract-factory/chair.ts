import { demention } from "./demention";

export interface IChair {
  name: string;
  width: number;
  height: number;
  depth: number;
  getDemention(): demention;
}
export default class Chair implements IChair {
  name = "";
  width = 0;
  height = 0;
  depth = 0;
  createChair(): IChair {
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
