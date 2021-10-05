// Day19 :【TypeScript 學起來】More on Functions
//都是測試例子，有些可能是故意測試錯誤，可自行註解

//** 使用 function 關鍵字 **//
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole); //Hello, World



//** Call Signatures，給 function 新增屬性 **//
//js function 是可以增加屬性
const jsFunc = () => {
    return "this's a function";
}

jsFunc.prop = "this's a prop";
jsFunc.desc = "this's a desc";
console.log(jsFunc);  //[Function: func] { prop: "this's a prop", desc: "this's a desc" }


type typeFunc = (x: string) => void;



//新增 call signatures
type DescribableFunction = {  
  description: string;
  (someArg: number): boolean;  //這邊特別注意我們使用：非 =>
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

//回傳boolean 如果大於5回傳true
const func = (someArg: number): boolean => { 
  return someArg > 5;  
};

//新增屬性
func.description = "isNumber > 5";

doSomething(func); //isNumber > 5 returned true



//** Construct Signatures **//
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}



//** Optional Parameters 可選參數 **//
const getName = (firstName: string, lastName?: string) => {
    return  lastName ? `${firstName} ${lastName}` : firstName;
}
 

//** default-initialized parameters 使用參數預設值 **//
const getName2 = (firstName: string, lastName = "Chen") => {
    return `${firstName} ${lastName}`;
} 
console.log(getName2("Tom")); //Tom Chen


const getName3 = (firstName = "Tom", lastName: string) => {
    return `${firstName} ${lastName}`;
}

console.log(getName3(undefined, "Chen")); //Tom Chen



//** Rest Parameters **//
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

const a = multiply(10, 1, 2, 3, 4);

console.log(a); //[10, 20, 30, 40]

const getName4 = (firstName: string, ...rest: string[]) => {
    return `${firstName} ${rest.join(' ')}`;
} 
const names = getName4('Tom', 'Jerry', 'Chen');
console.log(names); 


//** Rest Arguments **//
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

console.log(arr1); // [1, 2, 3, 4, 5, 6]


// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
// error
const angle = Math.atan2(...args); 


// Inferred as 2-length tuple
const args = [8, 5] as const;
// ok
const angle = Math.atan2(...args);
