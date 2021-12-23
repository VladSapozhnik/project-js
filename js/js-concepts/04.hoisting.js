/*
console.log(sum(5,10))

function sum(a, b) {
    return a + b
};

console.log(i) //undefined
var i = 42
console.log(i)*/

//let & const no hoisting

/*
console.log(num) //ошибка
let num = 42
console.log(num)*/

//Function Expression & Function Declaration


//Function Declaration
console.log(square(5))
function square(num) {
    return num ** 2
}

//Function Expression
var square2 = function (num) {
    return num ** 2
}
console.log(square2(2))