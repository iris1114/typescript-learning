// Day14:【TypeScript 學起來】Interfaces(介面) 
//都是測試例子，有些可能是故意測試錯誤，報錯請自行註解掉


//** 定義 interfaces **//
interface IPerson {
    name: string;
    age: number;
}

const iris: IPerson = {
    name: 'Iris',
    age: 18
};

//變數比介面多或少一些屬性是不允許的。
const iris2: IPerson = {
    name: 'Iris'
};

const iris2: IPerson = {
    name: 'Iris',
    age: 18,
    gender: 'female'
};


//** 可選屬性 `？` **//
interface IPerson2 {
    name: string;
    age?: number;
}

const iris3: Person2 = {
    name: 'Iris'
};


//** 但還是一樣不能新增未定義的屬性 **//
const iris4: IPerson2 = {
    name: 'Iris',
    gender: 'female'
    //error: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
    //Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
};


//** 如果要新增任意屬性 怎麼新增呢 - Index Signatures **//
interface IPerson3 {
    name: string;
    age?: number;
    [propName: string]: string | number | undefined;
}

const iris5: IPerson3 = {
    name: 'Iris',
    gender: 'female'  
};


//** 唯讀屬性 `readonly` **//
interface IPerson4 {
    readonly id: number; //唯讀約束
    name: string;
    age?: number;
    [propName: string]: any;
}

const iris6: IPerson4 = {
    id: 89757, //如果沒給則報錯 Property 'id' is missing in type 
    name: 'Iris',
    gender: 'female'
};

iris.id = 9527; // error: Cannot assign to 'id' because it is a read-only property.


//**  interface 應用在函式中 **//
interface IPerson5 {
    readonly id: number;
    name: string;
    age: number;
    [propName: string]:  number | string;  
}

const iris7: IPerson5 = {
    id: 89757,
    name: 'Iris',
    age: 18;
    gender: 'female'
};

const greetPerson = (person : IPerson) => {
    console.log(`hi,${person.name}!`);
}

greetPerson(iris); //hi,Iris!



//** extends **//
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

//繼承多個interface 
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {
    background: string;
}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
  background: "white"
};



//** Intersection Types (交集型別) **//
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;



//** interface 可以重複定義 **//
interface IPerson6 {
    name: string;
}

interface IPerson6 {
    age?: number;
}

interface IPerson6 {
    gender: string;
}

const iris8:IPerson6 = {  
    name: 'Iris',
    age: 18
}
//error:Property 'gender' is missing in type '{ name: string; age: number; }' but required in type 'IPerson6'



//** interface 還可以定義陣列及函式 **//
//array
interface INumberArray {
    [index: number]: number;
}
const list: INumberArray = [1, 1, 2, 3, 5];

//function
interface IPersonFunc {
  (name: string, age: number): void;
}