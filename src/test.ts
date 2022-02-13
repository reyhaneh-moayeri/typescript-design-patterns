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