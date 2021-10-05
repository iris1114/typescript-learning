"use strict";
// Day19 :【TypeScript 學起來】More on Functions
//** 使用 function 關鍵字 **//
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole); //Hello, World
//** Call Signatures，給 function 新增屬性 **//
//js function 是可以增加屬性
var jsFunc = function () {
    return "this's a function";
};
jsFunc.prop = "this's a prop";
jsFunc.desc = "this's a desc";
console.log(jsFunc); //[Function: func] { prop: "this's a prop", desc: "this's a desc" }
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
//回傳boolean 如果大於5回傳true
var func = function (someArg) {
    return someArg > 5;
};
//新增屬性
func.description = "isNumber > 5";
doSomething(func); //isNumber > 5 returned true
function fn(ctor) {
    return new ctor("hello");
}
//** Optional Parameters 可選參數 **//
var getName = function (firstName, lastName) {
    return lastName ? firstName + " " + lastName : firstName;
};
//** default-initialized parameters 使用參數預設值 **//
var getName2 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Chen"; }
    return firstName + " " + lastName;
};
console.log(getName2("Tom")); //Tom Chen
var getName3 = function (firstName, lastName) {
    if (firstName === void 0) { firstName = "Tom"; }
    return firstName + " " + lastName;
};
console.log(getName3(undefined, "Chen")); //Tom Chen
//** Rest Parameters **//
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
var a = multiply(10, 1, 2, 3, 4);
console.log(a); //[10, 20, 30, 40]
var getName4 = function (firstName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return firstName + " " + rest.join(' ');
};
var names = getName4('Tom', 'Jerry', 'Chen');
console.log(names);
//** Rest Arguments **//
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
var args = [8, 5];
// error
var angle = Math.atan2.apply(Math, args);
// Inferred as 2-length tuple
var args = [8, 5];
// ok
var angle = Math.atan2.apply(Math, args);
