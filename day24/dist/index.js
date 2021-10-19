"use strict";
// Day24 :【TypeScript 學起來】TypeScript 中使用 Class
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
//**  Fields & Readonly **//
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.name = "show point"; //readonly唯讀
        this.x = x;
        this.y = y;
    }
    Point.prototype.printPoint = function () {
        console.log("x: " + this.x + ", y: " + this.y);
    };
    return Point;
}());
var p = new Point(2, 4);
p.printPoint(); //x: 2, y: 4 
p.name = "hihi"; //若對readonly屬性賦值會報錯 error: Cannot assign to 'name' because it is a read-only property.
var GoodGreeter = /** @class */ (function () {
    function GoodGreeter() {
        this.word = "hello";
    }
    return GoodGreeter;
}());
//**  Fields & Readonly **//
var Point2 = /** @class */ (function () {
    // Normal signature with defaults
    function Point2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point2;
}());
var p2 = new Point2(100, 200);
var Point3 = /** @class */ (function () {
    // Overloads
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    return Point3;
}());
var p3 = new Point3(1, "5");
var p4 = new Point3("helllo");
console.log(p3); //Point3 { x: 1, y: '5' }
console.log(p4); //Point3 { x: 'helllo', y: undefined }
//**  Super call **//
var Base = /** @class */ (function () {
    function Base() {
        this.k = 4;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = this;
        console.log(_this.k);
        // 'super' must be called before accessing 'this' in the constructor of a derived class.
        _this = _super.call(this) || this;
        return _this;
    }
    return Derived;
}(Base));
//**  Method **//
var z = 0;
var Point4 = /** @class */ (function () {
    function Point4() {
        this.x = 10;
        this.y = 10;
        this.z = "hello";
    }
    //method
    Point4.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    //修改class的z屬性，需使用this.z，不然視為修改class外的 z
    Point4.prototype.editZ = function () {
        z = "world"; //error: Type 'string' is not assignable to type 'number'.
    };
    return Point4;
}());
//**  Getters / Setters **//
var Thing = /** @class */ (function () {
    function Thing() {
        this._size = 0;
    }
    Object.defineProperty(Thing.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            var num = Number(value);
            // Don't allow NaN, Infinity, etc
            if (!Number.isFinite(num)) {
                this._size = 0;
                return;
            }
            this._size = num;
        },
        enumerable: false,
        configurable: true
    });
    return Thing;
}());
var thing = new Thing();
console.log(thing.size); //0
thing.size = "seven";
console.log(thing.size); //0
thing.size = 2.2;
console.log(thing.size); //2.2
//**  Index Signatures **//
var obj = {
    name0: "iris",
    name1: "iris",
    2: "iris"
};
console.log(obj["name0"]); //iris
console.log(obj[2]); //iris
console.log(obj[name1]); //error: name1 is not defined
var obj2 = {
    toString: function () {
        console.log('toString called');
        return 'Hello';
    }
};
var Foo = /** @class */ (function () {
    function Foo(message) {
        this.message = message;
    }
    Foo.prototype.log = function () {
        console.log(this.message);
    };
    return Foo;
}());
var foo = {};
foo['Hello'].log(); // World
foo[obj2] = new Foo('World'); //error: Type '{ toString(): string; }' cannot be used as an index type.
