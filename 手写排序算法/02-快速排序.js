
let arr = [2, 1, 4, 6, 5, 4, 3, 2, 1]

function quickSort(arr) {
  // 给个出口
  if (arr.length < 2) {
    return arr
  }
  let mid = arr[0]
  let minArr = arr.slice(1).filter(item => item <= mid) //比基准小的
  let maxArr = arr.slice(1).filter(item => item > mid)  //比基准大的
  return [...quickSort(minArr), mid, ...quickSort(maxArr)] //递归调用
}
console.log(quickSort(arr));