/*
let a = 'A'
let b = 'B'
{
    a = 'New A'
    let b = 'New B'
    console.log('a', a)
    console.log('b', b)
}

console.log(a)
console.log(b)*/

//Const

const  PORT = 8080
const array = ['js', 'is']
array.push('!')
console.log(array)
array[2] = 'js2'
console.log(array)

const obj = {}
obj.name = 'Vlad'
obj.age = 24
console.log(obj)

obj.age = 23

console.log(obj)

delete obj.age
console.log(obj)