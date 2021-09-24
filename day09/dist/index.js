"use strict";
// Day09: 【TypeScript 學起來】物件型別 Object Types : arrays / function
//arrays
//1.一般方括號寫法
var list1 = [1, 2, 3];
//2.「型別 + 方括號」表示法
var list2 = [1, 2, 3];
//3.陣列泛型
var list3 = [1, 2, 3];
var list4 = [1, 1, 2, 3, 5];
//function
//Parameter Type Annotations 參數型別註釋
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
//Return Type Annotations 返回值型別註釋
function getFavoriteNumber() {
    return 26;
}
//Function Declaration 函式宣告
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2)); //3
//Function Expression 函式表示式
var sum2 = function (x, y) {
    return x + y;
};
console.log(sum2(1, 2)); //3
// Arrow Function 箭頭函式
var sum3 = function (x, y) { return x + y; };
console.log(sum3(1, 2)); //3
//Anonymous Functions 匿名函式
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
