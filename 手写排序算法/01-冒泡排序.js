
let arr = [2, 1, 4, 6, 5, 4, 3, 2, 1]

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // 大于的情况 换位置
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}
console.log(BubbleSort(arr));