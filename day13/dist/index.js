"use strict";
// Day13: 【TypeScript 學起來】只有 TS 才有的型別: Enum(列舉) 
//都是測試例子，故意測試錯誤，報錯請自行註解掉
//** Numeric enums **//
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
//** 手動賦值 **//
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 7] = "Sun";
    Days2[Days2["Mon"] = 1] = "Mon";
    Days2[Days2["Tue"] = 2] = "Tue";
    Days2[Days2["Wed"] = 3] = "Wed";
    Days2[Days2["Thu"] = 4] = "Thu";
    Days2[Days2["Fri"] = 5] = "Fri";
    Days2[Days2["Sat"] = 6] = "Sat";
})(Days2 || (Days2 = {}));
;
//** 要小心覆蓋的情況**//
var Days3;
(function (Days3) {
    Days3[Days3["Sun"] = 3] = "Sun";
    Days3[Days3["Mon"] = 1] = "Mon";
    Days3[Days3["Tue"] = 2] = "Tue";
    Days3[Days3["Wed"] = 3] = "Wed";
    Days3[Days3["Thu"] = 4] = "Thu";
    Days3[Days3["Fri"] = 5] = "Fri";
    Days3[Days3["Sat"] = 6] = "Sat";
})(Days3 || (Days3 = {}));
;
console.log(Days3["Sun"] === 3); // true
console.log(Days3["Wed"] === 3); // true
console.log(Days3[3] === "Sun"); // false
console.log(Days3[3] === "Wed"); // true
//** 可使用型別斷言（Type Assertion）來定義 **//
var Days4;
(function (Days4) {
    Days4[Days4["Sun"] = 7] = "Sun";
    Days4[Days4["Mon"] = 8] = "Mon";
    Days4[Days4["Tue"] = 9] = "Tue";
    Days4[Days4["Wed"] = 10] = "Wed";
    Days4[Days4["Thu"] = 11] = "Thu";
    Days4[Days4["Fri"] = 12] = "Fri";
    Days4[Days4["Sat"] = "S"] = "Sat";
})(Days4 || (Days4 = {}));
;
//**  String enums **//
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
//** Heterogeneous enums 異構列舉 **//
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
//** Computed and constant members 常數項和計算所得項 **//
//example 1
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Blue); //4
//example 2
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
var directions = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right];
