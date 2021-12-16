const defaultC = 10;

const getDefault = c => c * 2
function defaultParams (a = 2, b = getDefault(a), c = defaultC) {
    return console.log(a + b + c);
}

defaultParams(10)