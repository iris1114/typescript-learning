"use strict";
// Day21:【TypeScript 學起來】Generics 泛型
//都是測試例子，有些可能是故意測試錯誤，可自行註解
//**  什麼情況可以用？ **//
//複習定義 array 型別
//「型別 + 方括號」
var list1 = [1, 2, 3];
//陣列泛型 
var list2 = [1, 2, 3];
//陣列泛型 
function identity(arg) {
    console.log(arg);
    return arg;
}
identity([1, 2, 3]); // [1, 2, 3]
//「型別 + 方括號」
function identity2(arg) {
    console.log(arg);
    return arg;
}
identity2([1, 2, 3]); // [1, 2, 3]
//**  泛型怎麼用？ **//
function identity3(arg) {
    return arg;
}
var output1 = identity3([1, 2, 3]);
var output2 = identity3(["a", "b", "c"]);
console.log(output1); // [1, 2, 3]
console.log(output2); //["a","b","c"]
//**  多個參數情況 **//
function makeTuple(tuple) {
    return [tuple[0], tuple[1]];
}
var tuple1 = makeTuple([1, "a"]);
console.log(tuple1); //[ 1, 'a' ]
//arrow function
var makeTuple2 = function (tuple) {
    return [tuple[0], tuple[1]];
};
var tuple2 = makeTuple2([1, "a"]);
console.log(tuple2); //[ 1, 'a' ]
//** Generic Constraints 泛型約束 **//
//error
function loggingIdentity(arg) {
    console.log(arg.length); //error:Property 'length' does not exist on type 'T'.
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity2(3); //error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
loggingIdentity2({ length: 10, value: 3 });
//**  Using Type Parameters in Generic Constraints **//
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
var value1 = getProperty(x, "a");
var value2 = getProperty(x, "m"); //error: Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
console.log(value1); //1
console.log(value2); //undefined
function identityFn(arg) {
    return arg;
}
var myIdentity = identityFn;
var result = myIdentity([1, 2, 3]);
console.log(result); //[ 1, 2, 3 ]
function identityFn2(arg) {
    return arg;
}
var myIdentity2 = identityFn2;
var result2 = myIdentity2(123);
console.log(result2); //123
//**  Generic Classes **//
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
//限制為 number 型別
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 123)); //123
//限制為 string 型別
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test")); //test
