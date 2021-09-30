"use strict";
// Day18: 【TypeScript 學起來】Narrowing Part 2
//pet 有可能是 Fish or Bird 的型別
//isFish 這個function 回傳值的型別為 : pet is Fish，看是回傳 true or false
//當返回了true, 那他就是Fish
function isFish(pet) {
    return pet.swim !== undefined; //（pet as Fish）斷言 pet 為 Fish 型別 ， 所以 swim 不會是undefined 
}
// 例子2
var isUnknown = "hello unknown";
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
if (isNumber(isUnknown)) {
    // 這裡可以確保 isUnknown 是 number
    isUnknown.toFixed();
}
if (isString(isUnknown)) {
    // 這裡可以確保 isUnknown 是 string
    isUnknown.split(', ');
}
var parseResponse = function (resp) {
    switch (resp.status) {
        case 'OK': //透過 narrow 知道是 ISuccessResp 型別
            return resp.payload; //則去使用ISuccessResp的屬性payload
        case 'ERROR': // 透過 narrow 知道是 IErrorResp 型別
            return resp.description; //則去使用IErrorResp的屬性payload
        default:
            var _exhaustiveCheck = resp;
            return _exhaustiveCheck;
    }
};
