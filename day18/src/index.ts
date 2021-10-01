// Day18: 【TypeScript 學起來】Narrowing Part 2
//都是測試例子，有些可能是故意測試錯誤，可自行註解

//**  使用 type predicates **//
type Fish = { swim: () => void };
type Bird = { fly: () => void };

//pet 有可能是 Fish or Bird 的型別
//isFish 這個function 回傳值的型別為 : pet is Fish，看是回傳 true or false
//當返回了true, 那他就是Fish

function isFish(pet: Fish | Bird): pet is Fish { 
  return (pet as Fish).swim !== undefined;   //（pet as Fish）斷言 pet 為 Fish 型別 ， 所以 swim 不會是undefined 
}



//**  Discriminated unions  **//
//例子1
interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

let area = getArea({ kind: "circle", radius: 5});
console.log(area);


//例子2
interface ISuccessResp {
  status: 'OK';  //相同欄位 status
  payload: unknown;
}

interface IErrorResp {
  status: 'ERROR';
  errorCode: number;
  description: string;
}

type Resp = ISuccessResp | IErrorResp;

const parseResponse = (resp: Resp) => {
  switch (resp.status) {
    case 'OK':  //透過 narrow 知道是 ISuccessResp 型別
      return resp.payload; //則去使用ISuccessResp的屬性payload
    case 'ERROR': // 透過 narrow 知道是 IErrorResp 型別
      return resp.description; //則去使用IErrorResp的屬性payload
    default:
      const _exhaustiveCheck: never = resp; 
      return _exhaustiveCheck;
  }
};