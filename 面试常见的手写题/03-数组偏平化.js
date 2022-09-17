const _flat = (arr) => arr.reduce((prev, cur, index, arr) => {
  return prev.concat(Array.isArray(cur) ? _flat(cur) : cur)
}, [])
console.log(_flat([1, 2, 3, [4, 5, 6, [2, 1, 2, [3, 2, 2, 2, 1, [22, 22, 2, 2, 2,]]]]]));