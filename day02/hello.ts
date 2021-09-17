//Day02: Hello TypeScript! 環境安裝起來 + 牛刀小試～


//建立第一個 TypeScript 檔案
function sayHello(person: string) {
  return "Hello, " + person;
}

let user = "iris";
console.log(sayHello(user));



//TypeScript 會告訴你寫錯了 ， JavaScript 不會
function sayHello2(person: string) {
  return 'Hello, ' + person;
}

let user2 = [0, 1, 2]; 
console.log(sayHello2(user2)); //error:Argument of type 'number[]' is not assignable to parameter of type 'string'.