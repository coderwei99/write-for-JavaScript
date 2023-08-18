// 数组扁平化
/**
 * 
 * @param {*} arr: 原数组 
 * @returns Array
 */

// 1. toString
// const _flat = (arr) => arr.toString().split(',').map(item => Number(item))

// 2. flat
// console.log([[1, 2, 3], 4, 3, 2, [2, 1, 1,]].flat(Infinity));

// 3. reduce
const _flat = (arr) => arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? _flat(cur) : cur), [])

console.log(_flat([[1, 2, 3], 4, 3, 2, [2, 1, 1,]]))
