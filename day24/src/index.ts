// Day24 :【TypeScript 學起來】TypeScript 中使用 Class
//都是測試例子，有些可能是故意測試錯誤，可自行註解



//** Fields & Readonly **//
class Point {
  x: number; //可以使用實例屬性
  y: number;
  readonly name: string = "show point"; //readonly唯讀

  constructor(x = 0, y = 0) {  //預設給0
    this.x = x;
    this.y = y;
  }
  
  printPoint() {
    console.log(`x: ${this.x}, y: ${this.y}`);
  }
}


let p = new Point(2, 4);
p.printPoint();  //x: 2, y: 4 
p.name = "hihi"; //若對readonly屬性賦值會報錯 error: Cannot assign to 'name' because it is a read-only property.

class GoodGreeter {
  name: string; //error: Property 'name' has no initializer and is not definitely assigned in the 
  word: string;

  constructor() {
    this.word = "hello";
  }
}



//** Fields & Readonly **//
class Point2 {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

let p2 = new Point2(100,200);

class Point3 {
  // Overloads
  constructor(x: number, y: string){ //errro: Multiple constructor implementations are not allowed.
      this.x = x;
      this.y = y;
  };
  constructor(s: string){
    this.s = x;
  }
}

let p3 = new Point3(1,"5");
let p4 = new Point3("helllo")
console.log(p3); //Point3 { x: 1, y: '5' }
console.log(p4); //Point3 { x: 'helllo', y: undefined }



//** Super call **//
class Base {
  k = 4;
}
 
class Derived extends Base {
  constructor() {
    console.log(this.k);
// 'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }
}



//** Method **//
let z: number = 0;

class Point4 {
  x = 10;
  y = 10;
  z: string = "hello";
  
  //method
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
  
  //修改class的z屬性，需使用this.z，不然視為修改class外的 z
  editZ(){
      z = "world"; //error: Type 'string' is not assignable to type 'number'.
  }
}



//** Getters / Setters **//
class Thing {
  _size = 0;

 get size(): number {
   return this._size;
 }

 set size(value: string | number | boolean) {
   let num = Number(value);

   // Don't allow NaN, Infinity, etc

   if (!Number.isFinite(num)) {
     this._size = 0;
     return;
   }

   this._size = num;
 }
}

let thing = new Thing();
console.log(thing.size); //0
thing.size = "seven";
console.log(thing.size); //0
thing.size = 2.2;
console.log(thing.size); //2.2



//** Index Signatures **//
let obj = {
  name0: "iris",
  name1: "iris",
  2: "iris"
};

console.log(obj["name0"]);  //iris
console.log(obj[2]); //iris
console.log(obj[name1]); //error: name1 is not defined


let obj2 = {
  toString() {
    console.log('toString called');
    return 'Hello';
  }
};

class Foo {
  constructor(public message: string) {}
  log() {
    console.log(this.message);
  }
}

let foo: any = {};
foo['Hello'].log(); // World
foo[obj2] = new Foo('World'); //error: Type '{ toString(): string; }' cannot be used as an index type.

