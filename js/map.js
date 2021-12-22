const obj = {
    name: 'Sergey',
    age: 55,
    budget: 16000
}

const arr = [
    ['name', 'Sergey'],
    ['age', 26],
    ['budget', 16000]
]

console.log(Object.entries(obj)) //преобразовывает объект в массив
console.log(Object.fromEntries(arr)) //преобразовывает массив в объекты

const map = new Map(arr)

console.log(map)
console.log(map.get('name')) //получаем значение

map.set('newAge', 88)
    .set(NaN, 'is NaN?')

console.log(map.get(NaN))
console.log(map.get('newAge'))
/*
console.log(map.size)
map.delete(NaN)
console.log(map.size)
console.log(map.has(NaN))
*/

/*
map.clear()

console.log(map.size)*/

/*
for (let entry of map.entries()) {
    console.log(entry)
}*/

/*
for (let [key, value] of map) {
    console.log(key, value)
}*/

/*
for (let val of map.values()) {
    console.log(val)
}*/

for (let key of map.keys()) {
    console.log(key)
}

map.forEach((value, key, map) => {
    console.log(key, value)
})

const Arr = [...map];
const Arr2 = Array.from(map)
console.log(Arr2)