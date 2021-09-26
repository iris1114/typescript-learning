"use strict";
//  Day15: 【TypeScript 學起來】Interface VS Type Aliases 
var printId = function (id, name) {
    console.log(name + " id is " + id);
};
var sayHi = function (person) {
    console.log("hi, " + person.name + "!");
};
var sayHiAgain = function (person) {
    console.log("hihi, " + person.name + "!");
};
var SomePoint = /** @class */ (function () {
    function SomePoint() {
        this.x = 1;
        this.y = 2;
    }
    return SomePoint;
}());
var SomePoint2 = /** @class */ (function () {
    function SomePoint2() {
        this.x = 1;
        this.y = 2;
    }
    return SomePoint2;
}());
//error: A class can only implement an object type or intersection of object types with statically known members.
var SomePartialPoint = /** @class */ (function () {
    function SomePartialPoint() {
        this.x = 1;
        this.y = 2;
    }
    return SomePartialPoint;
}());
