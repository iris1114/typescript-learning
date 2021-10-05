"use strict";
// Day20 :【TypeScript 學起來】是 JavaScript 沒有的 Function Overloads(函式超載)
//都是測試例子，有些可能是故意測試錯誤，可自行註解
// function implementation 實際執行的function
function padding(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
padding(1); // ok: all
padding(1, 1); // ok: topAndBottom, leftAndRight
padding(1, 1, 1, 1); // ok: top, right, bottom, left
padding(1, 1, 1); // error: No overload expects 3 arguments, but overloads do exist that expect either 2 or 4 
function fn() {
    console.log("hello");
}
fn(); //error: Expected 1 arguments, but got 0.
function fn2() {
    console.log("hello");
}
fn2();
//function implementation 執行函式
function fn3(x) {
    console.log("hello");
}
function fn4(x) {
    console.log("hello");
}
fn(""); //"hello"
