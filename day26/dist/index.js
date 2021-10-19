"use strict";
// Day26 :【TypeScript 學起來】Class 與 Interface 的使用
//都是測試例子，有些可能是故意測試錯誤，可自行註解
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//門是一個類別
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
//防盜門是門的子類別, 有一個報警器的功能， 新增報警方法
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
//車的類別也有報警器的功能，新增報警方法
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
var car = new Car();
car.alert(); //Car alert
//Car 實現了 Alarm 和 Light 介面，既能報警，也能開關車燈。
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.alert = function () {
        console.log('Car alert');
    };
    Car2.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car2.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car2;
}());
var car2 = new Car2();
car2.lightOn(); //Car light on
var Car3 = /** @class */ (function () {
    function Car3() {
    }
    Car3.prototype.alert = function () {
        console.log('Car alert');
    };
    Car3.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car3.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car3;
}());
var car3 = new Car3();
car3.alert(); //Car alert
//** 介面繼承類別  **//
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d); //{ x: 1, y: 2, z: 3 }
