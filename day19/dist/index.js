"use strict";
// Day19  : 【TypeScript 學起來】Generics 泛型
//「型別 + 方括號」
var list1 = [1, 2, 3];
//陣列泛型 
var list2 = [1, 2, 3];
//**  泛型怎麼用？ **//
function identity(arg) {
    console.log(arg);
    return arg;
}
identity([1, 2, 3]); // [1, 2, 3]
function identity2(arg) {
    console.log(arg);
    return arg;
}
identity2([1, 2, 3]); // [1, 2, 3]
function identity3(arg) {
    return arg;
}
var output1 = identity3([1, 2, 3]);
var output2 = identity3(["a", "b", "c"]);
console.log(output1); // [1, 2, 3]
console.log(output2); //["a","b","c"]
var output3 = identity3(["a", "b", "c"]); //指定泛型回傳型別 `<type>`
var output4 = identity3(["a", "b", "c"]);
console.log(output3); // [ 'a', 'b', 'c' ]
console.log(output4); // [ 'a', 'b', 'c' ]
//**  多個參數情況 **//
var makeTuple = function (x, y) {
    console.log([x, y]);
};
makeTuple(1, "a"); //[1,"a"]
//**  泛型約束 **//
//由於事先不知道它是哪種型別，所以不能隨意的操作它的屬性或方法，如下方例子，泛型 T 不一定包含屬性 length
function loggingIdentity(arg) {
    console.log(arg.length); //error:Property 'length' does not exist on type 'T'.
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
