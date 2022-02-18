import Chair from "./chair";
export default class MediumChair extends Chair {
  constructor() {
    super();
    this.name = "MediumChair";
    this.width = 30;
    this.height = 30;
    this.depth = 30;
  }
}
