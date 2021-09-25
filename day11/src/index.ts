// Day11:【TypeScript 學起來】只有 TS 才有的型別 : Union Types(聯合型別) / Intersection types (交叉型別)
//都是測試例子，故意測試錯誤，報錯請自行註解掉

//**  union types(聯合型別) **/
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101); //ok
printId("202"); //ok


//typeof
function printId2(id: number | string) {
  if (typeof id === "string") {
    //型別為字串才 toUpperCase
    console.log(id.toUpperCase());
  } else {
    //其他自動判定為 number 型別
    console.log(id);
  }
}

printId2("ABC");

//Array.isArray()
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      console.log("Hello, " + x.join(" and "));
    } else {
      console.log("Welcome lone traveler " + x);
    }
}

welcomePeople(["a","b","c"]);



//**  Intersection types (交集型別) **/

//Intersection 在 primitive type 中使用，是無法同時滿足兩種型別的，會被認定為 never 型別。
function printId3(id: number & string) {
  console.log("Your ID is: " + id);
}

printId3(101); 
printId3("202"); 


//主要用來組合現有的型別，若都沒符合兩種型別，則會報錯提醒。
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

//帶入的參數需滿足這兩個型別
function draw(circle: ColorfulCircle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 });// ok
draw({ color: "red", raidus: 42 }); //error