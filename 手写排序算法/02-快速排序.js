let arr = [2, 1, 4, 6, 5, 4, 3, 2, 1];

// function quickSort(arr) {
//   // 给个出口
//   if (arr.length < 2) {
//     return arr
//   }
//   let mid = arr[0]
//   let minArr = arr.slice(1).filter(item => item <= mid) //比基准小的
//   let maxArr = arr.slice(1).filter(item => item > mid)  //比基准大的
//   return [...quickSort(minArr), mid, ...quickSort(maxArr)] //递归调用
// }
// console.log(quickSort(arr));


var sortArray = function (nums) {
  quickArray(nums, 0, nums.length - 1)
  return nums
};

function quickArray(nums, start, end) {
  if (start >= end) return
  let mid = quick(nums, start, end)
  quickArray(nums, start, mid - 1)
  quickArray(nums, mid + 1, end)
}

function quick(nums, start, end) {
  console.log(start, end);
  let prvot = nums[start]
  let left = start + 1
  let right = end
  while (left < right) {
    while (left < right && nums[left] < prvot) {
      left++
    }
    while (left < right && nums[right] > prvot) {
      right--
    }
    /**    l   r   
     * 4,3,1,7,5 ==> 4,3,1,7,5  ==> 1,3,4,7,5
     * 1,2,3,4
     * 
     */
    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  if (left === right && nums[right] > prvot) {
    right--;
  }
  if (right !== start) {
    [nums[start], nums[right]] = [nums[right], nums[start]]
  }
  return right
}



console.log(sortArray([15, 4, 2, 1]));
