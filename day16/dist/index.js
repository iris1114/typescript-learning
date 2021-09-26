"use strict";
//Day16:【TypeScript 學起來】Index Signatures 索引簽名
var iris = {
    name: 'Iris',
    gender: 'female'
};
var myArray = {
    1: 'a',
    2: 'b'
};
myArray[2] = "bbb"; //error: Index signature in type 'ReadonlyStringArray' only permits reading.
var good = {
    b: 1,
    c: 2
};
var bad = {
    b: 1,
    c: 2,
    d: 3
    //error:Type '{ b: number; c: number; d: number; }' is not assignable to type 'FromIndex'.
    //Object literal may only specify known properties, and 'd' does not exist in type 'FromIndex'.
};
