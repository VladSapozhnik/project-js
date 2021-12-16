const person = {
    age: 26,
    name: 'Sergey',
    'street': '22',
    toString: function () {
        return Object.keys(this).map(key => this[key])
    }
}

console.log(person.toString())