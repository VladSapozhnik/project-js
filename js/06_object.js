const cityField = 'city';

const job = 'frontend'
const person = {
    age: 26,
    name: 'Sergey',
    'street': '22',
    job,
    /*[cityField + Date.now()]: 'Piter',*/
    print: () => 'print',
    toString () { //toString: function () {} тоже самое
        return Object.keys(this).filter(key => key !== 'toString').map(key => this[key]).join(' ')
    }
}
console.log(person.toString())
console.log(person.print())
console.log(person)

const first = {a: 1}
const second = {b: 2}
/*console.log(Object.is(20, 20))*/
console.log(Object.assign({}, first, second)) //{}, чтобы объект first не изменился
console.log(Object.assign({}, first, {a: 2, c: 3}))
console.log(first)
console.log(Object.entries(person)) //массив массивов
console.log(Object.keys(person), 'keys')
console.log(Object.values(person), 'values')
//console.log(person) //city1639737131704: 'Piter',