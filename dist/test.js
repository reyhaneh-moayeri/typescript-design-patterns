"use strict";
// Dictionary
var a;
a = { 1: "plane", 2: "bar", 3: "baz" };
console.log(a[1]); // plane => /since we have key type number we can't access it by dot notation
// console.log(a.2) // error
var b;
b = {
    colors: ["blue", "red", "pink"],
    friends: ["hasti", "kamyar", "sara"]
};
console.log(b.colors); // red
// can delete items 
delete b.colors;
console.log(b);
// ************  Tuple = > array with fixed length and fixed type
var c;
c = ["plane", 1, true];
//******* using sets
var d;
d = new Set([2, 5, 8, 7, 2]);
var f;
f = new Set([1, 2, 3, 4, true, false, "hello"]);
f.add("dog");
f.delete(4);
console.log(f);
console.log(f.size); // 7
console.log(f.has("hello")); // true
console.log(Array.from(f)[2]); // 3
// ************  Classes
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.stepWalked = 0;
        this.name = name;
    }
    Cat.prototype.walk = function (steps) {
        console.log("".concat(this.name, " walked ").concat(steps, " steps"));
        this.stepWalked += steps;
    };
    Cat.prototype.totalStepsWalked = function () {
        console.log("".concat(this.name, " has walked ").concat(this.stepWalked, " steps totally"));
    };
    return Cat;
}());
var CAT = new Cat("Cosmo");
CAT.walk(10);
CAT.walk(10);
CAT.walk(15);
CAT.totalStepsWalked();
