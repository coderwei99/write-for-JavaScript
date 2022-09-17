
let arr = [2, 1, 4, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 6, 5, 4, 2, 1, 2222, 1, 2, 3, 4, 2, 1, 3]

function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
console.log(sortArray(arr));