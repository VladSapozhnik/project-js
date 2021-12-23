/*
let a = 42
let b = a
b++
console.log(a, 'a')
console.log(b, 'b')*/

let a = [1,2,3]
let b = a
b.push(4)
console.log(a, 'a')
console.log(b, 'b')
//Мы храним одно значение, храним ссылку на массив а.

let e = [1,2,3,4]

let c = a.concat()
c.push(5)
console.log(a, 'a')
console.log(c, 'c')

console.log(a === b) //true
console.log(b === e) //false
//потому, что разные массивы, а не ссылка массивов