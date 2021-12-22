const person = {
    name: 'Sergey',
    age: 25,
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`job is ${job}`)
        console.log(`phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Lena',
    age: 31
}

/*const newFnc = person.logInfo.bind(lena) //person.logInfo.bind(lena)() ========= () в конце это новая функция

newFnc('frontend', '+8-999-888-777')*/

/*
const newFnc = person.logInfo.bind(lena, 'Front-end', '+8-999-888-777')

newFnc()*/

/*person.logInfo.call(lena, 'Front-end', '+5-666-555-887')*/ //тоже самое person.logInfo.bind(lena)()
person.logInfo.apply(lena, ['Front-end', '+5-666-555-887'])

const array = [1,2,3,4,5,6,7]

/*function multBy (arr, n) {
    return arr.map(item => item * n)
}

console.log(test(array, 15))*/

Array.prototype.multBy = function (n) {
    return this.map(item => item * n)
}

console.log(array.multBy(5))
