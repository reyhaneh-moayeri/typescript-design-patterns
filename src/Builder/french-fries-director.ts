import Food from "./food";
import foodBuilder from "./food-builder";

export default class FrenchFriesDirector {
  static construct(): Food {
    return new foodBuilder()
      .setIngridiants(["potato", "oil"])
      .setCookTime(10)
      .setName("french fries")
      .getResult();
  }
}
