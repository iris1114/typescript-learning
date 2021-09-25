// Day13: 【TypeScript 學起來】只有 TS 才有的型別: Enum(列舉) 
//都是測試例子，故意測試錯誤，報錯請自行註解掉



//** Numeric enums **//
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};


//** 手動賦值 **//
enum Days2 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};


//** 要小心覆蓋的情況**//
enum Days3 {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days3["Sun"] === 3); // true
console.log(Days3["Wed"] === 3); // true
console.log(Days3[3] === "Sun"); // false
console.log(Days3[3] === "Wed"); // true


//** 可使用型別斷言（Type Assertion）來定義 **//
enum Days4 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};


//**  String enums **//
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}


//** Heterogeneous enums 異構列舉 **//
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}


//** Computed and constant members 常數項和計算所得項 **//
//example 1
enum Color {Red, Green, Blue = "blue".length};
console.log(Color.Blue); //4

//example 2
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}


//** 常數列舉 **//
const enum Directions {
    Up,
    Down,
    Left,
    Right
}


//** 外部列舉 **//
declare enum Directions2 {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right];