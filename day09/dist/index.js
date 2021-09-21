"use strict";
// Day09: 【TypeScript 學起來】物件型別 Object Types : arrays / function
//arrays
// 1.「型別 + 方括號」表示法
var list1 = [1, 2, 3];
//2.陣列泛型
var list2 = [1, 2, 3];
var list3 = [1, 1, 2, 3, 5];
//function
//Parameter Type Annotations 參數型別註釋
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
//Return Type Annotations 返回值型別註釋
function getFavoriteNumber() {
    return 26;
}
//Anonymous Functions 匿名函式
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
