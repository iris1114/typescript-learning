// Day25 :【TypeScript 學起來】Class 的繼承、修飾符、abstract、static
//都是測試例子，有些可能是故意測試錯誤，可自行註解



//** extends 繼承 **//
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
const a = new Derived();
a.greet(); //Hello, world!
a.greet("reader"); //Hello, READER



//** Public & Private & Protected **//
class Person {
  public name: string; //公有
  protected age: number; //受保護的
  private phone: number; //私有

  constructor(name: string, age: number, phone: number) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
class Child extends Person {
  constructor(name: string, age: number, phone: number) {
    super(name, age, phone);
  }
  desc() {
    console.log(`${this.name}${this.age}${this.phone}`);
    // phone 為私有屬性， 只能在 Person class 裡面使用
  }
}
let child = new Child("iris", 18, 0912345678);
console.log(child.name);
console.log(child.age); //只能在Person及子類別裡面使用 error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
console.log(child.phone); //只能在class Person裡使用 error: Property 'phone' is private and only accessible within class 'Person'.


//private constructor
class Person2 {
    public name:string;
    private constructor (name:string) {
        this.name = name;
  }
}
class Child2 extends Person2 {  //無法被繼承 error: Cannot extend a class 'Person2'. Class constructor is marked as private.
    constructor (name) {
        super(name);
    }
}

let a2 = new Child2('iris');


//protected constructor
class Person3 {
    public name:string;
    protected constructor (name:string) {
        this.name = name;
  }
}
class Child3 extends Person3 {  
    constructor (name:string) {
        super(name);
        console.log(name);
    }
}

let a3 = new Child3('iris');
console.log(a3); //Child3 { name: 'iris' }




//** Abstract 抽象 **//
abstract class Animal {
  public name;
  public constructor(name:string) {
      this.name = name;
  }
  public abstract sayHi(): void;
}

let b = new Animal('Tom'); //error: Cannot create an instance of an abstract class.


abstract class Animal2 {
  public name;
  public constructor(name:string) {
      this.name = name;
  }
  public abstract sayHi():void;
}

class Cat extends Animal {
  public sayHi() {
      console.log(`Meow, My name is ${this.name}`);
  }
}

let cat = new Cat('Tom');




//** static **//
class Animal3 {
    public name;
    public constructor(name:string) {
        this.name = name;
    }
    static isAnimal(c:object) {
        return c instanceof Animal;
    }
}

let c = new Animal3('Tom');
let d = Animal3.isAnimal(c); 
console.log(d); //true
c.isAnimal(c); //c.isAnimal is not a function


//可以搭配 public 、 protected 和 private 一起使用
class MyClass {
  private static x = 0;
}
console.log(MyClass.x); //error:Property 'x' is private and only accessible within class 'MyClass'.


//static 也能夠繼承
class Base2 {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived2 extends Base2 {
  myGreeting = Derived2.getGreeting();
}

let derived2 = new Derived2();
console.log(derived2);
