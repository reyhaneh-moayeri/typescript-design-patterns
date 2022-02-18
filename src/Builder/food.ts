export default class Food {
  name = "";
  ingridiants: string[] = [];
  cookTime = 0;

  construction() {
    console.log(
      `${this.name} food contains ${this.ingridiants.join(", ")} and takes ${
        this.cookTime
      } minutes to cook`
    );
  }
}
