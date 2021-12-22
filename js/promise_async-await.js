const promise = ms => {
    return  new Promise(r => setTimeout(() => r(), ms))
}

promise(2000).then(() => console.log('2'));

const promise2 = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

promise2(3000).then(() => console.log('get'));

const url = 'https://jsonplaceholder.typicode.com/todos'

//fetch аналог ajax

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms));
}

function fetchTodos () {
    return delay(2000).then(() => fetch(url)).then(response => response.json())
}

fetchTodos().then(data => console.log(data)).catch(err => console.log('error', err));

const delay2 = ms => {
    return new Promise(response => setTimeout(() => response(), ms))
}

function fetchTodosTwo () {
    return delay2(2000).then(() => fetch(url)).then(response => response.json())
}

fetchTodosTwo().then(data => console.log(data)).catch(err => console.log(err));


async function fetchAsyncTodos () {
    try {
        await delay2(5000)
        const response = await fetch(url);
        const data = await response.json()
        console.log(data, ' data 2')
    } catch (e) {
        console.log(e)
    }
}

fetchAsyncTodos()
//await
//async всегда возвращает promise
async function fetchAsyncTodos () {
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('data', data);
    } catch (e) {
        console.log(e)
    }
}

fetchAsyncTodos();
