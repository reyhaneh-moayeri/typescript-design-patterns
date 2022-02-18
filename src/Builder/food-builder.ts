import Food from "./food";
interface IFoodBuilder {
  food: Food;
  setName(name: string): this;
  setIngridiants(Ingridiants: string[]): this;
  setCookTime(cookTime: number): this;
  getResult(): Food;
}

export default class FoodBuilder implements IFoodBuilder {
  food: Food;
  constructor() {
    this.food = new Food();
  }
  setName(name: string): this {
    this.food.name = name;
    return this;
  }
  setIngridiants(Ingridiants: string[]): this {
    this.food.ingridiants = Ingridiants;
    return this;
  }
  setCookTime(cookTime: number): this {
    this.food.cookTime = cookTime;
    return this;
  }
  getResult(): Food {
    return this.food;
  }
}
