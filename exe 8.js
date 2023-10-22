//Exe. 8

let myMap = new Map();
myMap.set('key', 'prop');
myMap.set(1, 'prop2');
myMap.set(true, 1234);

for (let key of myMap.keys()){
  console.log(`Ключ — ${key}`)
}

for (let value of myMap.values()){
  console.log(`Значение — ${value}`)
}