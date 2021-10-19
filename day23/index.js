// Day23 :【TypeScript 學起來】先了解 ES6 Class


//**  Class Declaration **//
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}



//**  Class Expressions **//
// unnamed
let Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

// named
let Point = class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};



//**  一些 Class 要知道的事**//
class Point {
  //建構初始物件
  constructor(x = 0, y = 0) { //預設給0
    this.x = x;
    this.y = y;
  }

  //prototype methods 
  printPoint() {
    console.log(`x: ${this.x}, y: ${this.y}`);
  }
  
  //getter
  get xValue() {
    return this.x;
  }

  //setter
  set xValue(z) {
    if (z < 0) {
      z = 0;
    }
    this.x = z;
  }
  
  //static method without this
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

//用 new 來使用這個模板
let p = new Point(2, 4);
p.printPoint(); //x: 2, y: 4 

//getter 直接像屬性一樣訪問
console.log(`get x value: ${p.xValue}`); //get x value: 2

//setter 直接用 = 來賦值即可
p.xValue = -5;
console.log(`set x value: ${p.xValue}`); // set x value: 0

//static
let p1 = new Point(10, 12);
let p2 = new Point(16, 18);
console.log(Point.distance(p1, p2)); //8.48528137423857


//用 extends 繼承類別Point， 建立子類別addPoint
class AddPoint extends Point {
  constructor(x, y) {
    super(x, y); //用super呼叫父層的constructor（x,y）
    this.x = x;
    this.y = y;
  }
    
  add() {
    this.printPoint(); //因為已繼承，可以直接使用父層的方法
    return `total = ${this.x + this.y}`; 
  }
}

let p3 = new AddPoint(5, 7);
console.log(p3.add()); //total = 12