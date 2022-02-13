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
