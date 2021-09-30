// Day17: 【TypeScript 學起來】什麼是 Narrowing？

function padLeft(padding: number | string, input: string) {
  return new Array(padding + 1).join(" ") + input; //error: Operator '+' cannot be applied to types 'string | number' and 'number'.

}
console.log(padLeft(20,"hello"));

function padLeft2(padding: number | string, input: string) {
  if (typeof padding === "number") { //數字
    return new Array(padding + 1).join("") + input; 
  }
  return padding + input; //其他就是字串
}

console.log(padLeft("*","hello"));


//**  使用`typeof`   **//
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {
       //Object is possibly 'null'.
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      console.log(strs);
    }
}


//**  使用 in  **//
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {  //animal 物件裡有屬性 "swim"，則一定是 Fish 型別
    return animal.swim();
  }
 
  return animal.fly();
}


//**  使用 instanceof  **//
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());       
    //(parameter) x: Date
  } else {
    console.log(x.toUpperCase());
    //(parameter) x: string
  }
}


//**  使用 Assignments  **//
let x = Math.random() < 0.5 ? 10 : "hello world!";
console.log(Math.random());
console.log(x);
x = 1; //1
x = true;  //error:Type 'boolean' is not assignable to type 'string | number'.



