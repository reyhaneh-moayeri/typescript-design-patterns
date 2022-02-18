/*
the abstract factory pattern adds an abstraction layer over multiple other creational patterns 

think if it as a factort that can retuen factories also return builder prototype singletons or other design pattern implementations
*/

import FurnitureFactory from "./furniture-factory";

let FURNITURE = FurnitureFactory.getFurniture("SmallChair");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDemention());

FURNITURE = FurnitureFactory.getFurniture("MediumTable");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDemention());
