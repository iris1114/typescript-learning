// Day21:【TypeScript 學起來】Generic Function 泛型函式
//都是測試例子，有些可能是故意測試錯誤，可自行註解



//**  Generic Function 初體驗 **//
//any
function firstElement(arr: any[]) {
  return arr[0];
}

const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);

console.log(s); //a
console.log(n); //1


//generic
function firstElement2<Type>(arr: Type[]): Type {
  return arr[0];
}

// s is of type 'string'
const s2 = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n2 = firstElement([1, 2, 3]);

console.log(s2); //a
console.log(n2); //1



//**   Inference  **//
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n, 10));

console.log(parsed); //[1,2,3]



//**   Constraints 型別約束  **//
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
  
  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);
  console.log(longerArray); //[1,2,3]
  
  // longerString is of type 'alice' | 'bob'
  const longerString = longest("alice", "bob");
  console.log(longerString); //alice
  
  // Error! Numbers don't have a 'length' property
  const notOK = longest(10, 100);
  //error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.



//**    Specifying Type Arguments  指定參數型別  **//

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine([1, 2, 3], ["hello"]);
//error: Type 'string' is not assignable to type 'number'.


const arr2 = combine<string | number>([1, 2, 3], ["hello"]);
console.log(arr); //[1, 2, 3, "hello"]
// 指定他為 string | number 聯合型別。


//**    寫出好的 Generic Function  **//
// 1.Push Type Parameters Down

// 返回型別為 Type
function firstElement3<Type>(arr: Type[]) {
  return arr[0];
}

// 返回型別為 any
function firstElement4<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement3([1, 2, 3]);
// b: any (bad)
const b = firstElement4([1, 2, 3]);


//  2. Use Fewer Type Parameters
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}


//  3. Type Parameters Should Appear Twice
function greet1<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
greet1("world");

function greet2(s: string) {
  console.log("Hello, " + s);
}
greet2("world");