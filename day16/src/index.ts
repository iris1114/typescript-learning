//Day16:【TypeScript 學起來】Index Signatures 索引簽名


//**  定義一個 Index Signature  **//
interface IPerson {
    name: string;
    age?: number;
    [propName: string]: string | number | undefined;
}

const iris: IPerson = {
    name: 'Iris',
    gender: 'female'  
};


//**  所用屬性都必須符合 Index Signatures 的描述  **//
// error example
interface NumberDictionary {
  [index: string]: number;
  length: number; // ok
  name: string; //error: Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}

// ok example
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}



//**  可使用 readonly  **//
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = {
    1: 'a',
    2: 'b'
}

myArray[2] = "bbb"; //error: Index signature in type 'ReadonlyStringArray' only permits reading.




//** 在 String Literal（字串字面值）中使用 Mapped Types  **//
type Index = 'a' | 'b' | 'c';

type FromIndex = { 
    [k in Index]?: number 
};

const good: FromIndex = { 
    b: 1, 
    c: 2 
};

const bad: FromIndex = {
    b:1,
    c:2,
    d:3 
    //error:Type '{ b: number; c: number; d: number; }' is not assignable to type 'FromIndex'.
    //Object literal may only specify known properties, and 'd' does not exist in type 'FromIndex'.
};



//** 同時擁有 string 和 number 型別的 indexers  **//
interface ArrStr {
  [key: string]: string | number; // Must accommodate all members
  [index: number]: string; // Can be a subset of string indexer

  // Just an example member
  length: number;
}





