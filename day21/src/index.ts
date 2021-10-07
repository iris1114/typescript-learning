// Day21:【TypeScript 學起來】Generics 泛型
//都是測試例子，有些可能是故意測試錯誤，可自行註解



//**  什麼情況可以用？ **//
//複習定義 array 型別

//「型別 + 方括號」
const list1: number[] = [1, 2, 3];
//陣列泛型 
const list2: Array<number> = [1, 2, 3]; 

//陣列泛型 
function identity(arg: Array<number>): Array<number> {
  console.log(arg);
  return arg;
}
identity([1, 2, 3]); // [1, 2, 3]

//「型別 + 方括號」
function identity2(arg: number[]): number[] {
  console.log(arg);
  return arg;
}
identity2([1, 2, 3]); // [1, 2, 3]



//**  泛型怎麼用？ **//
function identity3<Type>(arg: Type[]): Type[] {
  return arg;
}

let output1 = identity3([1, 2, 3]); 
let output2 = identity3(["a", "b", "c"]);
console.log(output1);// [1, 2, 3]
console.log(output2); //["a","b","c"]



//**  多個參數情況 **//
function makeTuple<T, U>(tuple: [T, U]): [T, U] {
  return [tuple[0], tuple[1]];
}

const tuple1 = makeTuple([1, "a"]); 
console.log(tuple1); //[ 1, 'a' ]


//arrow function
const makeTuple2 = <T, U>(tuple: [T, U]): [T, U] => {
  return [tuple[0], tuple[1]];
}

const tuple2 = makeTuple2([1, "a"]); 
console.log(tuple2); //[ 1, 'a' ]



//** Generic Constraints 泛型約束 **//

//error
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  //error:Property 'length' does not exist on type 'T'.
    return arg;
}

//ok
interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity2(3); //error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
loggingIdentity2({ length: 10, value: 3 });




//**  Using Type Parameters in Generic Constraints **//
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
let value1 = getProperty(x, "a");
let value2 = getProperty(x, "m"); //error: Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

console.log(value1); //1
console.log(value2); //undefined




//**  Generic Interface **//
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identityFn<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identityFn;

let result = myIdentity([1, 2, 3]); 
console.log(result); //[ 1, 2, 3 ]


//可以把泛型引數提前到介面名上
interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
 
function identityFn2<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity2: GenericIdentityFn2<number> = identityFn2;


let result2 = myIdentity2(123); 
console.log(result2); //123



//**  Generic Classes **//
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

//限制為 number 型別
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 123)); //123


//限制為 string 型別
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test")); //test
