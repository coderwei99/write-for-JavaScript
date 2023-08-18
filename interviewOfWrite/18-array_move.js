let arr = [1, 2, 3, 4, 5]

function moveArray(arr, startIndex, endIndex) {
  let newArr = [...arr]
  switchItem(startIndex, newArr, endIndex)

  return newArr
}

function switchItem(startIndex, newArr, endIndex) {
  let _start = startIndex > 0 ? startIndex : newArr.length + startIndex
  if (_start >= 0 && _start < newArr.length) {
    let _end = endIndex > 0 ? endIndex : newArr.length + endIndex

    const [item] = newArr.splice(startIndex, 1)
    newArr.splice(_end, 0, item)
  }
}

console.log(moveArray(arr, 2, 3)) //[1,2,4,3,5]

// console.log(moveArray(arr, -1, -2)) //[1,2,3,5,4]
