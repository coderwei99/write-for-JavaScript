const createArray = (x, y) => new Array(x).fill(0).map(item => new Array(y).fill(0))

console.log(createArray(3, 3));