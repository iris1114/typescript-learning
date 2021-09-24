//Day10:【TypeScript 學起來】只有 TS 才有的型別 : any / unknow / void / never
//都是測試例子，故意測試錯誤，報錯請自行註解掉
//** any **/
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var obj = { x: 0 };
obj.bar = 100;
obj = "hello";
var n = obj;
var s = obj;
var b = obj;
console.log(n); //hello
//未宣告型別的變數及參數都為any
//例子1:
var something;
something = 7;
something = "seven";
//例子2:
function fn(s) {
    console.log(s.subtr(3));
}
fn(42);
//** unknown **/
function f1(a) {
    a.b(); // OK
}
function f2(a) {
    a.b(); //error: Property 'b' does not exist on type 'unknown'.
}
var value;
var value1 = value; // ok
var value2 = value; // ok
var value3 = value; // error
var value4 = value; // error
var value5 = value; // error
var value6 = value; // error
var value7 = value; // error
var value8 = value; // error
//** void **/
function alertName() {
    alert('My name is iris');
}
//** never **/
function error(message) {
    throw new Error(message);
}
function fn2(x) {
    if (typeof x === "string") {
        // do something
    }
    else if (typeof x === "number") {
        // do something else
    }
    else {
        x; // has type 'never'!
    }
}
