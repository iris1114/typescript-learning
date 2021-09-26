"use strict";
// Day14:【TypeScript 學起來】Interfaces(介面) 
//都是測試例子，有些可能是故意測試錯誤，報錯請自行註解掉
var iris = {
    name: 'Iris',
    age: 18
};
//變數比介面多或少一些屬性是不允許的。
var iris2 = {
    name: 'Iris'
};
var iris2 = {
    name: 'Iris',
    age: 18,
    gender: 'female'
};
var iris3 = {
    name: 'Iris'
};
//** 但還是一樣不能新增未定義的屬性 **//
var iris4 = {
    name: 'Iris',
    gender: 'female'
    //error: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
    //Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
};
var iris5 = {
    name: 'Iris',
    gender: 'female'
};
var iris6 = {
    id: 89757,
    name: 'Iris',
    gender: 'female'
};
iris.id = 9527; // error: Cannot assign to 'id' because it is a read-only property.
var iris7 = {
    id: 89757,
    name: 'Iris',
    age: 18,
    gender: 'female'
};
var greetPerson = function (person) {
    console.log("hi," + person.name + "!");
};
greetPerson(iris); //hi,Iris!
var cc = {
    color: "red",
    radius: 42,
    background: "white"
};
var iris8 = {
    name: 'Iris',
    age: 18
};
var list = [1, 1, 2, 3, 5];
var point = {
    getDist: function (x) {
        if (x && typeof x == "number") {
            return x;
        }
        else {
            return 0;
        }
    }
};
console.log(point.getDist(20));
