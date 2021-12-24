const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success')
    }, 500)
})

const delay2 = ms => new Promise(((resolve, reject) => setTimeout(() => {resolve(`Done!!!, ${ms}ms`)}, ms)))
delay2(8000).then(data => console.log(data))

//выполняется сразу после выполнения промиса
promise.then(data => console.log(data))

const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done! ' + `${ms}ms`), ms)
})


delay(1000)
    .then(data => delay(500))
    .then((data) => console.log(data))
    .catch(err => console.log(err + ' err')) //error
    .finally(() => console.log('finally'))


async function asyncDelay() {
    try {
        const data = await delay(5000)
        console.log(data, ' data')
    } catch (err) {
        console.log('Error', err)
    }
}

asyncDelay()

Promise.all([
    delay(200),
    delay(2000),
    delay(6500)
]).then(data => console.log(data, 'All'))

Promise.race([
    delay(200),
    delay(2500),
    delay(7000)
]).then(data => console.log(data, ' race'))