import Chair from "./chair";
export default class SmallChair extends Chair {
  constructor() {
    super();
    this.name = "SmallChair";
    this.width = 10;
    this.height = 10;
    this.depth = 10;
  }
}
