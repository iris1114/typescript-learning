// Day12: 【TypeScript 學起來】只有 TS 才有的型別: Literal Types(字面值型別) / Tuple (元組)
//都是測試例子，有些可能是故意測試錯誤，可自行註解


//** Literal Types 字面值型別 **/

//string literal types 
//example1
let x: "hello" = "hello";
x = "hello"; //ok
x = "howdy";  //Type '"howdy"' is not assignable to type '"hello"'

//example2
function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(`${s} placed at the ${alignment}`)
}
printText("Hello, world", "left");
printText("G'day, mate", "centre"); //error: Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.


//numeric literal types
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}


//non-literal types
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  console.log(x);
}
configure({ width: 100 });
configure("auto");
configure("automatic"); // 不符Options 及 “auto”
//error： Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.


//** Tuple 元組 **/
//example1
const iris: [string, number] = ['iris', 18];

//example2
let tom: [string, number];

tom = ['tom', 18]; //如果只有宣告tom沒賦值，會是undefined，tsconfig strictNullChecks 打開的話會報錯提醒
tom[0] = 'Tom'; //ok
tom[1] = 25; //ok
tom[0].slice(1); //ok
tom[1].toFixed(2); //ok
tom.push('male'); //ok

tom = ['tom chen']; //error:Property '1' is missing in type '[string]' but required in type '[string, number]'.
tom.push(true); //error: Argument of type 'true' is not assignable to parameter of type 'string | number'.