import Food from "./food";
import FoodBuilder from "./food-builder";

export default class PizzaDirector {
  static construct(): Food {
    return new FoodBuilder()
      .setIngridiants(["cheese", "tomato"])
      .setCookTime(30)
      .setName("pizza")
      .getResult();
  }
}
