//Day06: 資料型別那些事 : 總覽

//string
const names: string = "iris";


//number
const age: number = 18;


//boolean
const isDone: boolean = false;


//null
const n: null = null;
//如:賦值給string型別(嚴謹模式無法)
const city: string = n;


//undefined
const u: undefined = undefined;
//如:賦值給number型別(嚴謹模式無法)
const price: number = u;


//object
const _person: object = {
    name: "iris",
    age: 18
};


//array
const list: number[] = [1, 2, 3];


//function
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}


//any
let myFavoriteNumber: any = "seven";
myFavoriteNumber = 7;
let myFavoriteNumber2: boolean = myFavoriteNumber; // 布林型別 ok


//union types
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}


//literal types
let x: "hello" = "hello";
x = "hello"; // ok
x = "howdy"; // Type '"howdy"' is not assignable to type '"hello"'.

//enums
enum Days {
  Sun,Mon,Tue,Wed,Thu,Fri,Sat
}
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true



//void
function alertName(): void {
  alert("My name is iris");
}


//unknow
let value: unknown;
value = true; // 布林型別，ok
value = "Hello World"; // 字串型別，ok
let value1: unknown = value; // unknown型別，ok
let value2: boolean = value; // 布林型別， error


//never
function error(message: string): never {
  throw new Error(message);
}


//tuple
const iris: [string, number] = ['iris', 18];