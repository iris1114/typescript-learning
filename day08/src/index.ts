//Day08:【TypeScript 學起來】物件型別 Object Types : object

// 一般 JSON 物件格式
let person = {
    name: "iris",
    age: 18
};

person.name = "aka 廢廢前端" //ok 型別相同
person = {
    name: "aa",  //ok 覆寫的物件格式必須完全相同
    age: 20
}

person.name = false; // error Type 'boolean' is not assignable to type 'string'.
person.job = "在家躺" //error Property 'job' does not exist on type
person = {
    name: "bb"   //error Property 'age' is missing in type 
}
person = {
    gender : "male", //error Type '{ gender: string; job: string; }' is not assignable to type '{ name: string; age: number; }'
    job : "在家躺"
}

//沒開嚴謹模式的時候
delete person.name; //可執行刪除屬性

//tsconfig 開啟嚴謹模式 會報錯提醒
delete person.name;//error: The operand of a 'delete' operator must be optional.



// object 型別註記
let person2: object = {
    name: "iris",
    age: 18
};

person2.name = "aka 廢廢前端" //error  Property 'name' does not exist on type 'object'.
person2 = {
    name: "aa",  //ok 
    age: 20
}
person2.name = false; // error Property 'name' does not exist on type 'object'.
person2.job = "在家躺" //error Property 'job' does not exist on type 'object'.
person2 = {
    name: "bb"   //ok
}
person2 = {
    gender : "male", //ok
    job : "在家躺",
}
delete person2.name; //error Property 'name' does not exist on type 'object'.


//手動定義物件屬性型別
let person3 : {name: string, age: number} = {
    name: "iris", 
    age: 18
}



//在function中定義物件參數型別
const getUserInfo = (person4: { name: string, age: number }) =>{
    console.log(` Hello, my name is ${person4.name}. I'm ${person4.age} years old.`);
}

getUserInfo({ name: "iris", age: 18 });



//可選屬性 （Optional Properties）
const getUserInfo2 = (person5: { name: string, age?: number }) =>{
    if(person5.age !== undefined){
        console.log(`Hello, my name is ${person5.name}. I'm ${person5.age} years old.`);
    }else{
        console.log(`Hello, my name is ${person5.name}.`);
    }
}

getUserInfo2({ name: "iris"}); //Hello, my name is iris.
getUserInfo2({ name: "iris", age: 18 }); //Hello, my name is iris. I'm 18 years old.


