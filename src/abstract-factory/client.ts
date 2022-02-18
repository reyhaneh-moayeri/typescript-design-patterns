/*
the abstract factory pattern adds an abstraction layer over multiple other creational patterns 

think if it as a factort that can retuen factories also return builder prototype singletons or other design pattern implementations
*/

// use when you want to provide a library of relatively similar products from multiple different factories
// you want an independant system of how the products are created
//

import FurnitureFactory from "./furniture-factory";

let FURNITURE = FurnitureFactory.getFurniture("SmallChair");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDemention());

FURNITURE = FurnitureFactory.getFurniture("MediumTable");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDemention());
