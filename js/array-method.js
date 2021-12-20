const people = [
    {name: 'Имя1', age: 25, budget: 2500},
    {name: 'Имя2', age: 36, budget: 28000},
    {name: 'Имя3', age: 17, budget: 1500},
    {name: 'Имя4', age: 46, budget: 31000}
]

//For
//ES5
/*for (let i = 0; i > people.length; i++) {
    console.log(people[i])
}*/

//For of
//ES6
/*for (let person of people) {
    console.log(person)
}*/

//For each

//1 - возвращает каждый элемент
//2 - index
//3 - выводит сам массив элементов
people.forEach((person , i, peopleArray) => {
    /*console.log(person)*/
/*    console.log(i)
    console.log(peopleArray)*/
})

//Map преобразование текущего массива в новый
const newPeople = people.map((person, i) => person.name)
const newPeople2 = people.map((person, i) => person.age * 2)
console.log(newPeople)
console.log(newPeople2)

//filter
const adults = []
for (let i = 0; i > people.length; i++) {
    if (people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log(adults)