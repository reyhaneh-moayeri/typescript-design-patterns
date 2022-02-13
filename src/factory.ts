// use factory pattern to add extera abstraction

import { Console } from "console"

// you may want to add extra abstraction between the creation of the object and where it is used

interface IProduct {
    name:string
}

class ConcreteProduct implements IProduct {
    name = ""
}

// const conc = new ConcreteProduct()
// console.log(conc)

class ConcreteProductA extends ConcreteProduct {
    constructor(){
        super()
        this.name = "A"
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor(){
        super()
        this.name = "B"
    }
}

// let p1 = new ConcreteProductA()
// console.log(p1)

class Create{
   static createObj(something : string): IProduct{
        if(something === "A"){
            return new ConcreteProductA()
        }
        else if(something === "B"){
            return new ConcreteProductB()
        }
        else{
            throw new Error("Invalid product")
        }
    }
}

const myP = Create.createObj("B")
console.log(myP)