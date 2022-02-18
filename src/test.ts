// Dictionary

let a:{[key : number] : string}
a= {1:"plane" , 2: "bar", 3 : "baz"}
console.log(a[1]); // plane => /since we have key type number we can't access it by dot notation
// console.log(a.2) // error

let b:{[id:string] : string[]}  
b={
    colors: ["blue", "red", "pink"],
    friends: ["hasti", "kamyar", "sara"]
}

console.log(b.colors); // red

// can delete items 
delete b.colors;
console.log(b)

// ************  Tuple = > array with fixed length and fixed type

let c: [ string, number, boolean]
c = ["plane", 1, true]

//******* using sets
let d: Set<number>
d = new Set([2,5,8,7,2])

let f: Set<unknown>
f= new Set([1,2,3,4,true, false, "hello"])

f.add("dog")
f.delete(4)
console.log(f)
console.log(f.size)  // 7
console.log(f.has("hello"))  // true
console.log(Array.from(f)[2])  // 3

// Interfaces *********** a tool in typescript to define the structure of an object and classes to ensure that they 
// conform to any specific rule that you want to them


interface Animal {
    name: string;
    stepWalked: number;
}

// ************  Classes

class Cat implements Animal {
    name: string;
    stepWalked: number = 0

    constructor(name: string) {
        this.name = name
    }

    walk(steps: number) : void{
        console.log(`${this.name} walked ${steps} steps`)

        this.stepWalked += steps
    }

    totalStepsWalked() : void{
      console.log(`${this.name} has walked ${this.stepWalked} steps totally`)
    }
}

const CAT = new Cat("Cosmo")
CAT.walk(10)
CAT.walk(10)
CAT.walk(15)
CAT.totalStepsWalked()

// Abstract classes => are base class that have methods and properties that are common to all the derived classes

class Workout {
    time: number;

    constructor(time: number){
        this.time = time
    }
}

class Running extends Workout {
    steps: number
    constructor(time: number, steps: number){
        super(time)
        this.steps = steps
    }
}
class Bycling extends Workout {
    distance: number
    constructor(time: number, distance: number){
        super(time)
        this.distance = distance
    }

}
// use Access modifiers to restrict the access to the properties and methods

// public => can be accessed from anywhere => default
// private => can be accessed only from the class that it is defined in
// protected => can be accessed only from the class that it is defined in and the derived classes
// static => 