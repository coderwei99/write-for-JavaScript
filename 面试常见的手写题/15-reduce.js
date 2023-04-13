const arr = [1, 2, 3, 4, 5]

// reduce有两种情况，第一种是传入initData，这个时候从数组的第一项开始遍历，第二种是不传入，initData就是数组的第一项
Array.prototype._reduce = function (fn, initData) {
  let res = initData !== 0 && initData ? initData : this[0]
  for (let i = initData ? 0 : 1; i < this.length; i++) {
    res = fn(res, this[i])
  }
  return res
}

const newArr = arr._reduce((initData, currentData) => {
  return initData + currentData
}, 5)

console.log(newArr)
