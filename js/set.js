const set = new Set([1, 2, 3, 3, 5, 5, 6, 7])
console.log(set)
set.add(50).add(30).add(30)
console.log(set)
console.log(set.has(30))
console.log(set.size)
set.delete(1)
console.log(set.size)
/*
set.clear()
console.log(set.size)*/

console.log(set.values())
console.log(set.keys())


console.log(set.entries()) //ключ и значение совпадают например [1, 1]

/*
for (let key of set.keys()) {
    console.log(key)
}*/

function uniqValues (array) {
    return [...new Set(array)] //Array.from()
}

console.log(uniqValues([1, 2, 2, 4, 5, 6, 7, 7, 8, 'a']))


const set2 = [1,2,2,3,4,5,5,5, 'a','b','a']
const newSet = new Set(set2)
newSet.add(5).add(5).add(6).add(6).add('b').add(2)
console.log(newSet)
console.log(newSet.has('a'))