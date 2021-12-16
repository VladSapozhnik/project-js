const mathRandom = () => Math.random() > 0.5;

const teamplate = `${mathRandom()} : <p>Random</p> ? NoRandom`

console.log(teamplate);

const text = 'hello'

console.log(text.startsWith('hell'));
console.log(text.startsWith('H'));
console.log(text.endsWith('llo'));
console.log(text.includes('llo'))
console.log(text.repeat(3))
console.log(text.trimStart())
console.log(text.trimEnd())
console.log(text.trim())
console.log(text.padStart(10))
console.log(text.padEnd(8), 'abc')