//Day10:【TypeScript 學起來】只有 TS 才有的型別 : any / unknow / void / never
//都是測試例子，有些可能是故意測試錯誤，可自行註解


//** any **/
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let obj: any = { x: 0 };
obj.bar = 100;
obj = "hello";
const n: number = obj;
const s: string = obj;
const b: boolean = obj;
console.log(n); //hello

//未宣告型別的變數及參數都為any
//例子1:
let something;
something = 7;
something = "seven";

//例子2:
function fn(s) {  
  console.log(s.subtr(3));
}
fn(42);



//** unknown **/
function f1(a: any) {
    a.b(); // OK
}

function f2(a: unknown) {
    a.b(); //error: Property 'b' does not exist on type 'unknown'.
}

let value: unknown;
let value1: unknown = value; // ok
let value2: any = value; // ok
let value3: boolean = value; // error
let value4: number = value; // error
let value5: string = value; // error
let value6: object = value; // error
let value7: any[] = value; // error
let value8: Function = value; // error



//** void **/
function alertName(): void {
    alert('My name is iris');
}



//** never **/
function error(message: string): never {
  throw new Error(message);
}

function fn2(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}