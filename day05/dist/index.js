"use strict";
//Day05: TS 指定型別的三種方法 
//Type Inference (型別推斷) 
var x = 3;
x = "hello"; // error: Type 'number' is not assignable to type 'string'.
//Type Annotation (型別註記)
var age = 18; // number variable
var person = "iris"; // string variable
var isUpdated = true; // Boolean variable
age = "32"; //error: Type 'string' is not assignable to type 'number'.
isUpdated = false; //ok
console.log(age); //18
console.log(person); //iris
console.log(isUpdated); //false
//語法1: 值 as 型別
var obj2 = {};
obj2.age = 18;
obj2.name = "iris";
var obj3 = {
    age: 18,
    name: "iris"
};
//語法2: <型別>值
var obj4 = {
    age: 18,
    name: "iris"
};
console.log("assertions-as", obj2); //{ age: 18, name: 'iris' }
console.log("assertions-as", obj3); //{ age: 18, name: 'iris' }
console.log("assertions-<type>", obj4); //{ age: 18, name: 'iris' }
var foo2 = {
// 編譯器將會提供 Foo 屬性的代碼提示
};
