/*

the decorator pattern is a structural pattern that allows you to attach 
additional responsibility to an object at runtime

it is used in both object oriented programming and Functional paradigms

the decorator pattern adds extensibility without modifying the original object


*/

import Value from "./value";
import Add from "./add";
import Sub from "./sub";
const A = Value(1);
const B = Value(4);

console.log(Add(A, B).value); // 5
console.log(Sub(B, A).value); // 3
