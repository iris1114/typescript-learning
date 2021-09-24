// Day09: 【TypeScript 學起來】物件型別 Object Types : arrays / function

//arrays
//1.一般方括號寫法
const list1 = [1, 2, 3];

//2.「型別 + 方括號」表示法
const list2: number[] = [1, 2, 3];

//3.陣列泛型
const list3: Array<number> = [1, 2, 3]; 

//4. 用 interface (介面)表示陣列
interface NumberArray {
    [index: number]: number;
}
const list4: NumberArray = [1, 1, 2, 3, 5];



//function
//Parameter Type Annotations 參數型別註釋
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}


//Return Type Annotations 返回值型別註釋
function getFavoriteNumber(): number {
  return 26;
}


//Function Declaration 函式宣告
function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(1,2)); //3


//Function Expression 函式表示式
let sum2 = function (x: number, y: number): number {
  return x + y;
};
console.log(sum2(1,2)); //3


// Arrow Function 箭頭函式
let sum3 = (x: number, y: number): number =>  x + y;
console.log(sum3(1,2)); //3


//Anonymous Functions 匿名函式
const names = ["Alice", "Bob", "Eve"];
names.forEach( (s) => {
    console.log(s.toUpperCase());
});

