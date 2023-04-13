const arr = [1, 2, 3, 4, 5]

Array.prototype._map = function (fn) {
  // console.log(this)
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i]))
  }
  return newArr
}
const newArr = arr._map((item) => item * 2)
console.log(newArr)
