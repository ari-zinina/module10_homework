//Exe. 2

let x = 1234
typeof x

switch (typeof x){
  case "number":
    console.log('x — число');
    break;
  case "string":
    console.log('x — строка');
    break;
  case "boolean":
    console.log("х — логический тип данных");
    break;
  default:
    console.log("Тип x не определён")
}