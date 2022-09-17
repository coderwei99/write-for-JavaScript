
let arr = [6, 5, 1, 24, 3, 2, 1]
function sortArray(arr) {
  // 
  for (let i = 1; i < arr.length; i++) {
    let mid = i - 1

    let temp = arr[i]
    while (mid >= 0 && temp < arr[mid]) {
      arr[mid + 1] = arr[mid]
      mid--
    }
    arr[mid + 1] = temp

  }
  return arr
}
console.log(sortArray(arr));
