import Chair from "./chair";
export default class LargeChair extends Chair {
  constructor() {
    super();
    this.name = "LargeChair";
    this.width = 50;
    this.height = 50;
    this.depth = 50;
  }
}
