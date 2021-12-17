const symbols = Symbol('demo');
const order = Symbol('demo');

console.log(symbols === order) //false, они всё разные

const obj =  {
    name: 'Sergey',
    [symbols]: 'meta'
}

console.log(obj[symbols]) //meta
console.log(obj[order]) //undefined

for (let key in obj) {
    console.log(key)
}
//symbol не видет