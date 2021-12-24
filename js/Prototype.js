/*const person = {
    name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('hi')
    }
}

person.greet()*/

const person = new Object ({
    name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('hi')
    }
})

person.greet()

Object.prototype.sayHello = function () {
    console.log('Hello')
}

console.log(person.sayHello())

const lena = Object.create(person)
//будет прототип person, но объект будет пустой. Но можно вызвать прототип person.
lena.name = 'Lena'

console.log(lena)
console.log(lena.age)
console.log(lena.sayHello())