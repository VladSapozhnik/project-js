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

let array33 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function test (e, i) {
    var item = e.slice(0, 3);
    console.log(item)
    /* item.forEach(element => console.log(element) */
/*     for (itm = 0; itm < item.length; itm++) {
        perem = item;
    }
    return perem */
}
console.log(test(array33));

let array44 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayCopy = [].concat(array44);
let arrayCopy2 = array44.slice();
console.log(arrayCopy + ' copy')
console.log(arrayCopy2 + ' copy2')

