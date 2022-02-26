"use strict";
// Dictionary
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Abstract classes => are base class that have methods and properties that are common to all the derived classes
var Workout = /** @class */ (function () {
    function Workout(time) {
        this.time = time;
    }
    return Workout;
}());
var Running = /** @class */ (function (_super) {
    __extends(Running, _super);
    function Running(time, steps) {
        var _this = _super.call(this, time) || this;
        _this.steps = steps;
        return _this;
    }
    return Running;
}(Workout));
var Bycling = /** @class */ (function (_super) {
    __extends(Bycling, _super);
    function Bycling(time, distance) {
        var _this = _super.call(this, time) || this;
        _this.distance = distance;
        return _this;
    }
    return Bycling;
}(Workout));
// use Access modifiers to restrict the access to the properties and methods
// public => can be accessed from anywhere => default
// private => can be accessed only from the class that it is defined in
// protected => can be accessed only from the class that it is defined in and the derived classes
// static => 
