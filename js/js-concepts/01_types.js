/*console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'JavaScript')
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol('Js'))
console.log(typeof function ()  {})
console.log(typeof NaN)*/

//Приведение типов

/*
let language = 'JavaScript'

if (language) {
    console.log(`The best language is : ${language}`)
}*/

/*console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean(' '))
console.log(Boolean('0'))
console.log(Boolean(0))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function () {}))*/

// Строки числа
/*console.log(1 + '2') //string 12
console.log('' + 1 + 5) //string 15
console.log('' - 1 + 0)
console.log('3' * '8') //number
console.log(4 + 10 + 'px') //14px
console.log('px' + 5 + 10) //510px
console.log('42' - 10) //32
console.log('42px' - 2) //NaN
console.log(null + 2) //2 //Null = 0
console.log(undefined + 42)*/ //NaN

// == vs ===
// == по значению с приведением типов
/*
console.log(2 == '2') //true
console.log(2 === '2') //false

console.log(undefined == null)
console.log(undefined === null)*/

//лучше всегда использовать ===

/*console.log('0' == false) //true
console.log('0' == 0) //true
console.log(0 == 0)*/ //true

//=====
console.log(false == '') //true
console.log(false == []) //true
console.log(false == {}) //false
console.log('' == 0) //true
console.log('' == []) //true
console.log('' == {}) //false
console.log(0 == []) //true
console.log(0 == {}) //false
console.log(0 == null)  //false