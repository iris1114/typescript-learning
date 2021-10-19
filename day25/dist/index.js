"use strict";
// Day25 :【TypeScript 學起來】Class 的繼承、修飾符、abstract、static
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
//**  extends 繼承 **//
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log("Hello, world!");
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.greet = function (name) {
        if (name === undefined) {
            _super.prototype.greet.call(this);
        }
        else {
            console.log("Hello, " + name.toUpperCase());
        }
    };
    return Derived;
}(Base));
var a = new Derived();
a.greet(); //Hello, world!
a.greet("reader"); //Hello, READER
//**  Public & Private & Protected **//
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, phone) {
        return _super.call(this, name, age, phone) || this;
    }
    Child.prototype.desc = function () {
        console.log("" + this.name + this.age + this.phone);
        // phone 為私有屬性， 只能在 Person class 裡面使用
    };
    return Child;
}(Person));
var child = new Child("iris", 18, 0912345678);
console.log(child.name);
console.log(child.age); //只能在Person及子類別裡面使用 error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
console.log(child.phone); //只能在class Person裡使用 error: Property 'phone' is private and only accessible within class 'Person'.
//private constructor
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2(name) {
        return _super.call(this, name) || this;
    }
    return Child2;
}(Person2));
var a2 = new Child2('iris');
//protected constructor
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3(name) {
        var _this = _super.call(this, name) || this;
        console.log(name);
        return _this;
    }
    return Child3;
}(Person3));
var a3 = new Child3('iris');
console.log(a3); //Child3 { name: 'iris' }
//**  Abstract 抽象 **//
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var b = new Animal('Tom'); //error: Cannot create an instance of an abstract class.
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name);
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom');
//**  static **//
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    Animal3.isAnimal = function (c) {
        return c instanceof Animal;
    };
    return Animal3;
}());
var c = new Animal3('Tom');
var d = Animal3.isAnimal(c);
console.log(d); //true
c.isAnimal(c); //c.isAnimal is not a function
//可以搭配 public 、 protected 和 private 一起使用
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.x = 0;
    return MyClass;
}());
console.log(MyClass.x); //error:Property 'x' is private and only accessible within class 'MyClass'.
//static 也能夠繼承
var Base2 = /** @class */ (function () {
    function Base2() {
    }
    Base2.getGreeting = function () {
        return "Hello world";
    };
    return Base2;
}());
var Derived2 = /** @class */ (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myGreeting = Derived2.getGreeting();
        return _this;
    }
    return Derived2;
}(Base2));
var derived2 = new Derived2();
console.log(derived2);
