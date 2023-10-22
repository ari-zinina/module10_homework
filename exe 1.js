//Exe.1

let a = prompt('Please enter number, letter or word')
let b = a++
typeof b

switch (typeof b) {
  case "number":
    console.log('Число');
    break;
  case NaN:
    console.log('Упс, кажется, вы ошиблись');
    break;
  case !"number":
    console.log('Упс, кажется, вы ошиблись');
    break;
  default:
    console.log('Упс, кажется, вы ошиблись');
}

if (typeof b === "number") {
  if (b % 2 === 0) {
    console.log ('Четное')
} else {
    console.log ('Нечетное')
} } else {
  console.log()
}