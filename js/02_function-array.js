function summ(a,b) {
   return  a + b
}

console.log(summ(2,5));

const summ2 = (a, b) => {
    return a + b
}

console.log(summ(5, 10));

const summ3 = a => a ** 3;
console.log(summ3(5));

function log () {
    console.log(this)
}

const logArrow = () => {
  console.log(this)
}

const person = {
    name: 'Sergey',
    age: 22,
    log: log,
    logArrow: logArrow,
    delaylog: function () {
        const self = this;
        global.setTimeout(function () {
            console.log(`${self.name}: ${self.age} log`)
        }, 500)
    },
    delayLog2: function () {
        global.setTimeout(() => {
            console.log(`${this.name}: ${this.age} log2`)
        })
    }
}

person.log()
person.logArrow()
person.delaylog();
person.delayLog2();