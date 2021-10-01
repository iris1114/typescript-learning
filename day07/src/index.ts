//Day07: 原始資料型別 Primitive Types
//都是測試例子，有些可能是故意測試錯誤，可自行註解


//string (字串)
const myName: string = 'iris';
const myAge: number = 18;

const sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


//number (數值)
const decLiteral: number = 6;
const notANumber: number = NaN;
const infinityNumber: number = Infinity;


//boolean (布林值)
const isDone: boolean = false;


//null & undefined (設定 tsconfig strictNullChecks false)

const n: null = null;
//如:賦值給string型別 
const city: string = n; 
console.log("city", city);


const u: undefined = undefined;
//如:賦值給number型別 
const price: number = u; 
console.log("price", price);


//null & undefined (設定 tsconfig strictNullChecks true) 賦值時會報錯
// const city: string = n;  //error: Type 'null' is not assignable to type 'string'.
// const price: number = u;   //error: Type 'undefined' is not assignable to type 'number'


//想要變數可以多種型別， 可使用 Union Types (聯合型別)
const n2: null = null;
const city2: string | null  = n2; //可以是string 或者 null
const city3: string | null  = "taipei"; 

const u2: undefined = undefined;
const price2: number | undefined  = u2; //可以是number 或者 undefined
const price3: number | undefined  = 100; 