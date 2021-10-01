//  Day15: 【TypeScript 學起來】Interface VS Type Aliases 
//都是測試例子，有些可能是故意測試錯誤，可自行註解

//**  Type Aliases(型別別名) **//
type StringOrNum = string | number;
type objWithName = {name: string, id : StringOrNum };


const printId = (id: StringOrNum, name: string) => {
    console.log(`${name} id is ${id}`)
}

const sayHi = (person:objWithName) => {
    console.log(`hi, ${person.name}!`)
}

const sayHiAgain = (person:objWithName) => {
    console.log(`hihi, ${person.name}!`)
}



//** Type Aliases(型別別名) vs Interfaces(介面) **//

//相同處1: 都可以描述物件（object, function, array）形狀
//interface:
//object
interface IUser {
    readonly id: number; 
    name: string;
    age?: number;
    [propName: string]: any;
    getWeight(): number;
    getWeight(x?: number): number;
}

//function
interface SetPoint {
  (x: number, y: number): void;
}

//array
interface NumberArray {
    [index: number]: number;
}


//type:
//object
type User = {
    readonly id: number; 
    name: string;
    age?: number;
    [propName: string]: any;
    getWeight(): number;
    getWeight(x?: number): number;
}

//function
type SetPoint2 = (x: number, y: number) => void;

//array
type NumberArray2 = {
    [index: number]: number;
}



//相同處2: 都可以 extend , 只是用法不同
//Extending an interface:
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}


//Extending a type via intersections:
type Animal2 = {
  name: string
}

type Bear2 = Animal2 & { 
  honey: boolean 
}


//interface extends type:
type Name = { 
  name: string; 
}
interface User2 extends Name { 
  age: number; 
}


//Extending interface & type via intersections:
interface Name2 { 
  name: string; 
}
type User3 = Name2 & { 
  age: number; 
}



//相同處3: 都可以被 class implement
//interface
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}

//type
type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}


//如果是 union type 是無法被 implements 的

type PartialPoint = { x: number; } | { y: number; };

//error: A class can only implement an object type or intersection of object types with statically known members.
class SomePartialPoint implements PartialPoint {
  x = 1;
  y = 2;
}



//不同處1: interface 名稱可以重複定義並合併 ， type 不行
//interface:
interface Window {
  title: string
}

interface Window {
  ts: string
}

//type:
type Window2 = {
    title: string
}

type Window2 = { // Error: Duplicate identifier 'Window'.
    ts: string
}



//不同處2： type 可以描述 primitive type、tuple、union type 等, interface 無法 
type Name3 = string

interface Dog {
    arfarf();
}
interface Cat {
    meow();
}

//union type
type Pet = Dog | Cat

//tuple
type PetList = [Dog, Pet]