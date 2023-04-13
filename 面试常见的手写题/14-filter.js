const arr = [1, 2, 3, 4, 5]

Array.prototype._filter = function (fn) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) newArr.push(this[i])
  }
  return newArr
}

const newArr = arr._filter((item) => item > 2)

console.log(newArr)
