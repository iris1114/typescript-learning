//Day05: TS 指定型別的三種方法 



//Type Inference (型別推斷) 
let x = 3;
x = "hello";// error: Type 'number' is not assignable to type 'string'.



//Type Annotation (型別註記)
let age: number = 18; // number variable
let person: string = "iris"; // string variable
let isUpdated: boolean = true; // Boolean variable

age = "32";//error: Type 'string' is not assignable to type 'number'.
isUpdated = false; //ok

console.log(age); //18
console.log(person); //iris
console.log(isUpdated); //false




//Type Assertions(型別斷言)
//使用介面（Interfaces）來定義物件的型別(後面會講到)
interface Foo {
    age: number;
    name: string;
  }
  
  //語法1: 值 as 型別
  const obj2 = {} as Foo;
  obj2.age = 18;
  obj2.name = "iris";
  
  const obj3 = {
    age: 18,
    name: "iris"
  } as Foo;
  
  //語法2: <型別>值
  const obj4 = <Foo>{
    age: 18,
    name: "iris"
  };
  
  console.log("assertions-as", obj2); //{ age: 18, name: 'iris' }
  console.log("assertions-as", obj3); //{ age: 18, name: 'iris' }
  console.log("assertions-<type>", obj4); //{ age: 18, name: 'iris' }
  


//比Assertions更好的方法:
interface Foo2 {
  age: number;
  name: string;
}

const foo2: Foo2 = {
   // 編譯器將會提供 Foo 屬性的代碼提示
};
