import PizzaDirector from "./pizza-director";
import FrenchFriesDirector from "./french-fries-director";

const pizza = PizzaDirector.construct();
const frenchFries = FrenchFriesDirector.construct();

pizza.construction();
frenchFries.construction();

// builder pattern is a creational pattern that lets you construct complex objects step by step.
