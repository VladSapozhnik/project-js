let str = 'abcdefghijklmnopqrstuvwxyz';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

console.log(capitalizeFirstLetter(str));


function capitalizeLastLetter(string) {
    return string.slice(0, -1) + string.charAt(string.length - 1).toUpperCase();
};

console.log(capitalizeLastLetter(str));

let str_2 = 'abcdefghijklmnopqrstuvwxyz';

function toUpperCaseEven(str) {
    return str.split('').map((item, i) => i % 2 ? item.toLowerCase() : item.toUpperCase()).join('')
};

function toUpperCaseOdd(str) {
    return str.split('').map((item, i) => i % 2 ? item.toUpperCase() : item.toLowerCase()).join('')
};

console.log(toUpperCaseEven(str_2));
console.log(toUpperCaseOdd(str_2));

let str_3 = 'abcdefghijklmnopqrstuvwxyz';
console.log(str_3.slice(3));

console.log(str_3.slice(0, -5));

let question = 'slice vs splice??';

let array1 = ['a', 'b', 'c', 'd', 'e'];
let reversed = array1.reverse();
console.log(reversed + ' reversed array');

let array2 = [1, 10, 152, 13, 14, 32, 52];

let arraySort = array2.sort(function sortArray(a, b) {
    return a - b;
});

console.log(arraySort)

let questionquestion2 = 'sort with numeric value??'

console.log(arraySort + ' Sort');

let array3 = ['b', 'a', 'b', 'c', 'c', 'd', 'c', 'b', 'b'];

let unique = array3.filter((e, i) => array3.indexOf(e) === i);

function arrayUniq (array) {
    return [...new Set(array)]
}

console.log(arrayUniq(array3), ' array-3')

let question3 = 'SET and MAP'
let question4 = 'сложность алгоритма js'

console.log(unique + ' unique');


let question22 = 'Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:' + 
    + 'вывод fizz вместо чисел, кратных 3' + 
    + 'вывод buzz вместо чисел, кратных 5;' +
    + 'вывод fizzbuzz вместо чисел, кратных как 3, так и 5.'

    let question33 = 'Есть массив чисел произвольной длинны. Нужно создать переменные с значениями равняющимеся первым трем элементам массива'
    let question44 = 'Есть массив произвольный. Нужно создать дубль этого массива (такие же значения)'
    let question55 = 'Есть массив чисел - вывести сумму и вывести результат умножения всех чисел'


function questionFizzbuzz (n) {
    let text = "";
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            text += "fizzbuzz, "
        } else if (i % 3 == 0) {
            text += "fizz, "
        } else if (i % 5 == 0) {
            text += "buzz, "
        } else {
            text += i + ', '
        };
    };
    return text;
};

console.log(questionFizzbuzz(100) + ' question22');

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}

console.log(sum(10) + ' sum');
//question 33
let array33 = [5, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [a, b, c] = array33;

console.log(a, b, c, ' array');

//Total array
let arrayTotal = [5, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = arrayTotal.reduce((aсс, b) => aсс+ b);

console.log(total + ' total')

const reducerTotal = (acc, item) => acc + item;

console.log(arrayTotal.reduce(reducerTotal))

function Total(el) {
    return el ? el.reduce((acc, item) => acc + item): 0;
}

console.log(Total(arrayTotal) + ' Summ');

//Multiple array
let array7 = [2, 5, 11, 15];

let arrayMultiple = array7.reduce((aсс, b) => aсс * b);

console.log(arrayMultiple, '123123');

const reducerMultiple = (acc, item) => acc * item;

console.log(array7.reduce(reducerMultiple))

function multiple(el) {
    return el ? el.reduce((acc, item) => acc * item) : 0
}

console.log(multiple(array7) + ' multiple')

let array44 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayCopy = [].concat(array44);
let arrayCopy2 = array44.slice();
let test = [...array44]
console.log(arrayCopy + ' copy')
console.log(arrayCopy2 + ' copy2')


let firstname = 'Vlad',
    age = 24

console.log(`Меня зовут ${firstname}, мне ${age > 23 ? 24 : 23}`);

let name = 'Vlad'
console.log(name.toLowerCase().startsWith('vlad'));
console.log(name.toLowerCase().endsWith('lad'));
console.log(name.repeat(3));

let strSpace = '  space   '

console.log(strSpace.trim())

/*
function greet(name) {
    console.log('function greet');
};
*/

/*
greet()
const greet2 = function (name) { console.log(name, 'function greet 2') }
greet2(2)
*/

const arrow = (item) => {
  console.log('arraw', item)
}

arrow(1);

const arrow2 = item => console.log('arraw', item);

arrow2(2);

const arrow3 = item => item ** 2;

console.log(arrow3(13));
// ** - возводит в степень
// если 2 значения записываем в (item, item2);


const sum2 = (a, b = a, c = 0) => a + b + c;
console.log(sum2(5, 10))

function sumAll (...all) {
    console.log(all)
}

sumAll(1, 2, 3, 4, 5);

function sumAll2 (...all) {
    let result = 0;
    for (let num of all) {
        result += num
    };
    return result;
};

const res = sumAll2(1,2,3,4,5,6,7);
console.log(res);

/*let counter = 0;

let interval = setInterval(function (){
    if(counter == 10) {
        clearInterval(interval)
    } else  {
        console.log(++counter)
    }
}, 1000);*/


//Массивы


let arrayNum = [9, 1, 2, 3, 'Map', 5, 6, 7];
let arrayNum2 = [8,9,10,11,12,13,14]
arrayNum.unshift(15)

let firstNum = arrayNum.shift();
let lastNum = arrayNum.pop();
console.log(firstNum, ' first');
console.log(lastNum, ' last');

let text = 'JavaScript'

let arrayIndex = arrayNum.indexOf('Map')
console.log(arrayIndex, 'idx')
console.log(arrayNum[arrayIndex], ' index')

arrayNum[arrayIndex] = 'array';
console.log(arrayNum)

console.log(arrayNum.includes(6), ' includes');

let arrayStr = ['a', 'b', 'c', 'd']

let toUpperCase = arrayStr.map(item => item.toUpperCase());
console.log(toUpperCase, ' toUpperCase');


let numbers = [25, 30, 5, 57, 22, 13, 77]

let filterNumbers = numbers.filter(numbers => numbers > 25);
console.log(numbers, ' numbers');
console.log(filterNumbers, ' filterNumbers');

let textReverse = text.split('').reverse().join('');
console.log(textReverse, 'reverse')

let person = [
    {name: 'Elena', budget: 7300},
    {name: 'Sergey', budget: 1300},
    {name: 'Valera', budget: 13000}
]

let index2 = person.findIndex(person => person.budget === 13000);
console.log(index2, ' index2');

let person2 = person.find(person => person.budget === 1300);
console.log(person2, ' person2');

let personBudget = person
.filter(person => person.budget > 2500)
.reduce((acc, person) => {
    return acc += person.budget
}, 0);
console.log(personBudget, ' personBudget');


//Object

let person3 = {
    nameLast: 'Sergey',
    age: 35,
    lang: ['ru', 'ua', 'en'],
}

/* let {nameLast, age, lang} = person3;

console.log(age); */

//1 вариант
for (let key in person3) {
    if (person3.hasOwnProperty(key)) {
        console.log('key:', key),
        console.log('Value:', person3[key]);
    }
};

//можно без const, второй лучше.
const keys = Object.keys(person3)
keys.forEach((key) => {
    console.log('Key:', key),
    console.log('Value:', person3[key]);
});

const student = {
    firstnamee: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

const { firstnamee, lastname, country } = student;
console.log(firstnamee, lastname, country);


let person4 = {
    nameLast: 'Sergey',
    age: 35,
    lang: ['ru', 'ua', 'en'],
    info() {
        console.info('Name:', this.nameLast)
    }
}

person4.info();


//Object.keys метод объектов, который получает ключи.
const logger = {
    keys() {
        console.log('Logger keys:', Object.keys(this))
    },
    keysAndValue() {
        Object.keys(this).forEach (val => {
            console.log(`"${val}": ${this[val]}`)
        })
    }
}

//bind создает новою функцию которою мы кладем в переменую, а call вызывает ее сразу.
/* const bound = logger.keys.bind(person3);
bound() */

logger.keys.call(person3)
logger.keysAndValue.call(person3)


const personTest = {
    nameLast: 'Vasya',
    agee: 38
}

const {nameLast, agee} = personTest;

console.log(nameLast, agee)


const test3 = {
    keys() {
        console.log('key:', Object.keys(this))
    },
    keysAndValue() {
        Object.keys(this).forEach(key => {
            console.log(`${key}: ${this[key]}`)
        })
    }
}

test3.keys.call(personTest)
test3.keysAndValue.call(personTest)


//Асинхронность

const timeout = setTimeout(() => {
    console.log('SetTimeOut');
}, 2000)

clearTimeout(timeout)

const interval = setInterval(() => {
    console.log('SetTimeInterval')
}, 2000)

clearTimeout(interval)

const delay = (callback, wait = 2000) => {
    setTimeout(callback, wait);
}

delay(() => {
    console.log('delay')
}, 3000)



const prom = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve()
           /* reject('что-то пошло не так') */
        }, wait)
    })
    return promise
}
/*
prom(2500)
    .then(() =>{
        console.log('after to seconds')
    })
    .catch(err => console.error('error', err))
    .finally(() => console.log('Finally'));*/

/* const prom = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('что-то пошло не так, повторите')
        }, wait)
    })
    return promise
} */

/*
prom(2500)
    .then(() =>{
        console.log('after to seconds')
    })
    .catch(err => console.error('error', err))
    .finally(() => console.log('Finally'));
*/


const getData = () => new Promise( resolve => resolve([
    1,2,3,4,5,6
]))

getData().then(data => console.log(data))

async function asyncExample () {
    try {
        await prom(3000)
        const data = await getData()
        console.log('data', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}

asyncExample()