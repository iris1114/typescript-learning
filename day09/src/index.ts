// Day09: 【TypeScript 學起來】物件型別 Object Types : arrays / function

//arrays
// 1.「型別 + 方括號」表示法
const list1: number[] = [1, 2, 3];

//2.陣列泛型
const list2: Array<number> = [1, 2, 3]; 

//3.  用 interface (介面)表示陣列
interface NumberArray {
    [index: number]: number;
}
const list3: NumberArray = [1, 1, 2, 3, 5];



//function
//Parameter Type Annotations 參數型別註釋
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

//Return Type Annotations 返回值型別註釋
function getFavoriteNumber(): number {
  return 26;
}

//Anonymous Functions 匿名函式
const names = ["Alice", "Bob", "Eve"];
names.forEach( (s) => {
    console.log(s.toUpperCase());
});