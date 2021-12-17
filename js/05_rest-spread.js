//Rest

function average(arr) {
    return Array.from(arguments).reduce((acc, item) => acc + item);
}

average(1,2,3,4,5,6,7)


function average2 (a, b, ...arr) {
    return arr.reduce((acc, item) => acc + item);
}

console.log(average2(1,2,3,4,5,6));

const array = [1,2,3,4,5,6,7]

console.log(Math.max(...array))
console.log(Math.min(...array))
console.log(Math.max.apply(null, array)) //old
const fin = [1, ...array]
console.log(fin);

//Destructuring
const array2 = [1, undefined,3,4,5,6]

const [a,b = 23, ...c] = array2

console.log(a,b,c)

const [d,, e] = array2;
console.log(d, e)

const Object = {
    name: 'Sergey',
    age: 23,
    street: 'pp',
    concat: function () {
        return `${this.name}, ${this.age}, ${this.street}`
    }
}

/*const {name, age, ...rest} = Object;*/
/*console.log(name, age, rest);*/
const {name, age, street, concat : addressConcat} = Object;
console.log(Object.concat(), 'Object')
console.log(addressConcat.call(Object))

const newAddress = {...Object, street: '55'}
console.log(newAddress, ' street')
