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


let question3 = 'SET and MAP'
let question4 = 'сложность алгоритма js'

console.log(unique + ' unique');


let question22 = 'Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:' + 
    + 'вывод fizz вместо чисел, кратных 3' + 
    + 'вывод buzz вместо чисел, кратных 5;' +
    + 'вывод fizzbuzz вместо чисел, кратных как 3, так и 5.'

    let question33 = 'Есть массив чисел произвольной длинны. Нужно создать переменные с значениями равняющимеся первым трем элементам массива'
    let question44 = 'Есть массив произвольный. Нужно создать дубль этого массива (такие же значения)'


let array33 = [5, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [a, b, c, d] = array33;

console.log(a, b, c, d, ' array');

//Total array
let arrayTotal = [5, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = arrayTotal.reduce(function (a, b) {
    return a + b
});

console.log(total)

const reducerTotal = (current, item) => current + item;

console.log(arrayTotal.reduce(reducerTotal))

function Total(el) {
    return el ? el.reduce((current, item) => current + item): 0;
}

console.log(Total(arrayTotal) + ' Summ');

//Multiple array
let array7 = [2, 5, 11, 15];

let arrayMultiple = array7.reduce(function (a, b){
    return a * b
});

console.log(arrayMultiple);

const reducerMultiple = (current, item) => current * item;

console.log(array7.reduce(reducerMultiple))

function multiple(el) {
    return el ? el.reduce((current, item) => current * item) : 0
}

console.log(multiple(array7) + ' multiple')

let array44 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayCopy = [].concat(array44);
let arrayCopy2 = array44.slice();
console.log(arrayCopy + ' copy')
console.log(arrayCopy2 + ' copy2')

