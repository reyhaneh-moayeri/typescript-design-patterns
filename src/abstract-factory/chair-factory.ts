import SmallChair from "./small-chair";
import MediumChair from "./medium-chair";
import LargeChair from "./large-chair";
import IChair from "./chair";
export default class ChairFactory {
  static getChair(someproperty: string): IChair {
    if (someproperty === "SmallChair") {
      return new SmallChair();
    } else if (someproperty === "MediumChair") {
      return new MediumChair();
    } else if (someproperty === "LargeChair") {
      return new LargeChair();
    } else {
      throw new Error("No Factory Found");
    }
  }
}
