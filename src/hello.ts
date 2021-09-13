
//** 建立第一個 TypeScript 檔案 **//

function sayHello(person: string) {
    return "Hello, " + person;
  }
    
  let user = "iris";
  console.log(sayHello(user));
  
  
  
  //===========//
  
  
  
  //** TypeScript 會告訴你寫錯了 ， JavaScript 不會 **//
  //當參數改為 [0, 1, 2] ，TypeScript 會報錯， 告訴你這個參數只接受 string 型別， 不接受數字陣列。
  
  
  /* function sayHello2(person: string) {
    return 'Hello, ' + person;
  }
  
  let user2 = [0, 1, 2]; 
  console.log(sayHello2(user2)); */
  
  