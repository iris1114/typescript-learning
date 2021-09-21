"use strict";
//Day07: 原始資料型別 Primitive Types
//string (字串)
var myName = 'iris';
var myAge = 18;
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
//number (數值)
var decLiteral = 6;
var notANumber = NaN;
var infinityNumber = Infinity;
//boolean (布林值)
var isDone = false;
//null & undefined (設定 tsconfig strictNullChecks false)
var n = null;
//如:賦值給string型別 
var city = n;
console.log("city", city);
var u = undefined;
//如:賦值給number型別 
var price = u;
console.log("price", price);
//null & undefined (設定 tsconfig strictNullChecks true) 賦值時會報錯
// const city: string = n;  //error: Type 'null' is not assignable to type 'string'.
// const price: number = u;   //error: Type 'undefined' is not assignable to type 'number'
//想要變數可以多種型別， 可使用 Union Types (聯合型別)
var n2 = null;
var city2 = n2; //可以是string 或者 null
var city3 = "taipei";
var u2 = undefined;
var price2 = u2; //可以是number 或者 undefined
var price3 = 100;
