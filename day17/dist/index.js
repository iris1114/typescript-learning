"use strict";
// Day17: 【TypeScript 學起來】什麼是 Narrowing？
function padLeft(padding, input) {
    return new Array(padding + 1).join(" ") + input; //error: Operator '+' cannot be applied to types 'string | number' and 'number'.
}
console.log(padLeft(20, "hello"));
function padLeft2(padding, input) {
    if (typeof padding === "number") { //數字
        return new Array(padding + 1).join("") + input;
    }
    return padding + input; //其他就是字串
}
console.log(padLeft("*", "hello"));
//**  使用`typeof`   **//
function printAll(strs) {
    if (typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            //Object is possibly 'null'.
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        console.log(strs);
    }
}
function move(animal) {
    if ("swim" in animal) { //animal 物件裡有屬性 "swim"，則一定是 Fish 型別
        return animal.swim();
    }
    return animal.fly();
}
//**  使用 instanceof  **//
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        //(parameter) x: Date
    }
    else {
        console.log(x.toUpperCase());
        //(parameter) x: string
    }
}
//**  使用 Assignments  **//
var x = Math.random() < 0.5 ? 10 : "hello world!";
console.log(Math.random());
console.log(x);
x = 1; //1
x = true; //error:Type 'boolean' is not assignable to type 'string | number'.
