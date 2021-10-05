// Day20 :【TypeScript 學起來】是 JavaScript 沒有的 Function Overloads(函式超載)
//都是測試例子，有些可能是故意測試錯誤，可自行註解


//** Function Overloads 函式超載 **//
// overload signatures 定義
function padding(all: number): object;
function padding(topAndBottom: number, leftAndRight: number): object;
function padding(top: number, right: number, bottom: number, left: number): object;

// function implementation 實際執行的function
function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
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



//** 使用上要注意的地方 **//
//要至少2個或以上的 overload signatures
function fn(x: string): void;
function fn() {
   console.log("hello");
}
fn(); //error: Expected 1 arguments, but got 0.

function fn2(x: string): void;
function fn2(): void;
function fn2() {
  console.log("hello");
}
fn2();


//2. 實際執行函式帶入的參數型別要兼容 overload signatures 的型別
function fn3(x: boolean): void;

function fn3(x: string): void; //error:This overload signature is not compatible with its implementation signature. 

//function implementation 執行函式
function fn3(x: boolean) {
    console.log("hello");
}

function fn4(x: boolean): void;
function fn4(x: string): void;

function fn4(x: boolean | string) {
  console.log("hello");
}

fn(""); //"hello"