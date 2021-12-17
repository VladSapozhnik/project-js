const map = new Map(
    [['a', 1],['b', 10]]
)

console.log(map)
console.log(map.get('a')); // result = 1
map.set('c', 2) //добавляем 'c'
console.log(map)
/*map.clear()  //очищает */
console.log(map.has('a'))
console.log(map.size)
console.log(map.keys(), ' keys')
console.log(map.entries(), ' entries')
console.log(map.values(), ' values')

//set
const set = new Set([1,2,3,4,5,6,1,2,3])
console.log(set)
console.log(set.size)
console.log(set.add(21))
//set.delete(1)