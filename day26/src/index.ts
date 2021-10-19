// Day26 :【TypeScript 學起來】Class 與 Interface 的使用
//都是測試例子，有些可能是故意測試錯誤，可自行註解



//** implements **//
//報警器
interface Alarm {
    alert();
}

//門是一個類別
class Door {
}

//防盜門是門的子類別, 有一個報警器的功能， 新增報警方法
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

//車的類別也有報警器的功能，新增報警方法
class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}

const car = new Car();
car.alert();//Car alert




//** 一個類別可以實現多個介面 **//
interface Alarm2 {
    alert():void;
}

interface Light2 {
    lightOn():void;
    lightOff():void;
}

//Car 實現了 Alarm 和 Light 介面，既能報警，也能開關車燈。
class Car2 implements Alarm2, Light2 {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}


const car2 = new Car2();
car2.lightOn(); //Car light on




//** 介面繼承介面 **//
interface Alarm3 {
    alert():void;
}

interface LightableAlarm extends Alarm3 {
    lightOn():void;
    lightOff():void;
}

class Car3 implements LightableAlarm {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

const car3 = new Car3();
car3.alert(); //Car alert



//** 介面繼承類別  **//
class Point {
    x: number;
    y: number;

    constructor(x = 0,y = 0){
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

const point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d); //{ x: 1, y: 2, z: 3 }
